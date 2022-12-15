const { split } = require("lodash");

const input = `Sensor at x=251234, y=759482: closest beacon is at x=-282270, y=572396
Sensor at x=2866161, y=3374117: closest beacon is at x=2729330, y=3697325
Sensor at x=3999996, y=3520742: closest beacon is at x=3980421, y=3524442
Sensor at x=3988282, y=3516584: closest beacon is at x=3980421, y=3524442
Sensor at x=3005586, y=3018139: closest beacon is at x=2727127, y=2959718
Sensor at x=3413653, y=3519082: closest beacon is at x=3980421, y=3524442
Sensor at x=2900403, y=187208: closest beacon is at x=2732772, y=2000000
Sensor at x=1112429, y=3561166: closest beacon is at x=2729330, y=3697325
Sensor at x=3789925, y=3283328: closest beacon is at x=3980421, y=3524442
Sensor at x=3991533, y=3529053: closest beacon is at x=3980421, y=3524442
Sensor at x=3368119, y=2189371: closest beacon is at x=2732772, y=2000000
Sensor at x=2351157, y=2587083: closest beacon is at x=2727127, y=2959718
Sensor at x=3326196, y=2929990: closest beacon is at x=3707954, y=2867627
Sensor at x=3839244, y=1342691: closest beacon is at x=3707954, y=2867627
Sensor at x=2880363, y=3875503: closest beacon is at x=2729330, y=3697325
Sensor at x=1142859, y=1691416: closest beacon is at x=2732772, y=2000000
Sensor at x=3052449, y=2711719: closest beacon is at x=2727127, y=2959718
Sensor at x=629398, y=214610: closest beacon is at x=-282270, y=572396
Sensor at x=3614706, y=3924106: closest beacon is at x=3980421, y=3524442
Sensor at x=3999246, y=2876762: closest beacon is at x=3707954, y=2867627
Sensor at x=3848935, y=3020496: closest beacon is at x=3707954, y=2867627
Sensor at x=123637, y=2726215: closest beacon is at x=-886690, y=3416197
Sensor at x=4000000, y=3544014: closest beacon is at x=3980421, y=3524442
Sensor at x=2524955, y=3861248: closest beacon is at x=2729330, y=3697325
Sensor at x=2605475, y=3152151: closest beacon is at x=2727127, y=2959718`;

const exampleinput = `Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`;

const X = 0, Y = 1; // x = col, y = row
const SIGNAL = 0, BEACON = 1;
const y = 2000000;
const plotted_points = [];
const set_plotted_points = new Set();
let sort_beacons_against_sensor = [];

const snbs = input
  .replace(/(Sensor at |closest beacon is at |x=|y=)/g, '')
  .split(/\n/)
  .map(v => v.split(': ').map(v => v.split(', ').map(v => parseInt(v))))
  ;
// extract all sensors
const sensors = snbs.map(v => v[0]);
// extract unique beacons
const beacons = snbs.map(v => v[1]).reduce((p,v) => { 
  if (p.find(i => i[0] == v[0] && i[1] == v[1]) == undefined) {
    p.push(v); 
  }
  return p; 
}, []);
console.log('Sensors and Beacons: ', snbs);
console.log('Sensors: ', sensors);
console.log('Beacons: ', beacons);

const calc_distance = (coord1, coord2) => {
  return Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]);
};

sensors.forEach(s => {
  let beacons_clone = JSON.parse(JSON.stringify(beacons));
  // beacons_clone = beacons_clone.map(b => calc_distance(s,b));
  // beacons_clone.sort((a,b) => b - a);
  beacons_clone = beacons_clone.map(b => [...b, calc_distance(s,b)]);
  beacons_clone.sort((a,b) => a[2] - b[2]);
  // beacons_clone.sort((a,b) => calc_distance(s,b) - calc_distance(s,a));
  sort_beacons_against_sensor.push([s, beacons_clone[0]]);
  // sort_beacons_against_sensor.push([s, .sort((a,b) => calc_distance(s, a) - calc_distance(s, b))]);
});

console.log(sort_beacons_against_sensor);

console.log(sensors[0], beacons[0], calc_distance(sensors[0], beacons[0]));

const store_point = (p) => {
  let old_size = set_plotted_points.size;
  set_plotted_points.add(p[0]+','+p[1]);
  // if it's a unique entry
  if (set_plotted_points.size != old_size) {
    // push to our array
    plotted_points.push(p);
  }
}

const draw_signal = (sensor, distance) => {
  console.log('draw_signal: ', sensor, distance);
  // draw middle
  let i = sensor[X] - distance, n = sensor[X]  + distance;
  console.log('i: ', i, 'n: ', n);
  if (sensor[Y] == y) {
    for (; i <= n; i++) {
        store_point([i, sensor[Y]]);  
    }
  }
  // draw upwards and downwards
  let m, nx, ny1, ny2;
  for (let n = 1; n <= distance; n++) {
    // we are moving upwards and downwards
    ny1 = sensor[Y]-n;
    ny2 = sensor[Y]+n;
    if (ny1 == y || ny2 == y) {
      // x range of `m` upto `to`
      m = (distance - n)*-1, to = (distance - n);  
      console.log('n: ', n, 'm: ', m, 'to: ', to, 'ny1: ', ny1, 'ny2: ', ny2);
      for (; m <= to; m++) {
        nx = sensor[X]+m;
        if (ny1 == y) {
          store_point([nx, ny1]);
        }
        if (ny2 == y) {
          store_point([nx, ny2]);
        }
      }
      console.log('final m: ', m);
    }
  }
}

snbs.forEach(pair => draw_signal(pair[SIGNAL], calc_distance(pair[SIGNAL], pair[BEACON])));

console.log('set_plotted_points: ', set_plotted_points.size);
console.log('plotted_points: ', plotted_points.length);
let beacons_at_y = beacons.filter(b => { console.log(b[Y]); return b[Y] == y; });
console.log('beacons_at_y: ', beacons_at_y.length);
let points_at_y_sans_beacon = plotted_points.length - beacons_at_y.length;
console.log('points_at_y_sans_beacon: ', points_at_y_sans_beacon);
