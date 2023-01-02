const input = require('fs').readFileSync('./14.txt').toString();

const example = `498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;

const DEBUG = false;
const SAND_START = [0, 500];
let cur_sand = null;
let rocks = {};
let sands = {};
let lowest_rock_row = null; // also is floor row
const lines = input
  .split(/\n/)
  .map(v => 
    v.split(' -> ')
    .map(v => { 
      let t = v.split(','); 
      return [parseInt(t[1]), parseInt(t[0])]; 
    }
  ))
  ;
console.log(lines);


const gen_row_col_vals = (from, to, include_from, include_to) => {
  console.log('gen_row_col_vals', from, to);
  let vals = [];
  if (include_from) {
    vals.push(from);
  }
  if (from[0] != to[0] && from[1] == to[1]) {
    if (from[0] < to[0]) {
      for (let r = from[0] + 1, n = to[0]; r < n; r++) {
        vals.push([r, from[1]]);
      }
    }
    else {
      for (let r = from[0] - 1, n = to[0]; r > n; r--) {
        vals.push([r, from[1]]);
      }
    }
  }
  else if (from[0] == to[0] && from[1] != to[1]) {
    if (from[1] < to[1]) {
      for (let c = from[1] + 1, n = to[1]; c < n; c++) {
        vals.push([from[0], c]);
      }
    }
    else {
      for (let c = from[1] - 1, n = to[1]; c > n; c--) {
        vals.push([from[0], c]);
      }
    }
  }
  if (include_to) {
    vals.push(to);
  }
  
  return vals;
};

const init = () => {
  lowest_rock_row = Number.MIN_SAFE_INTEGER;
  // Generate rock positions
  let rock_pos = lines.reduce((p, l) => {
    p = [...p, l[0]];
    for (let i = 1; i < l.length; i++) {
      p = [...p, ...gen_row_col_vals(l[i-1], l[i], false, true)];
    }
    return p;
  }, []);

  // Find lowest rock position, if sand falls below this then we stop
  rock_pos.forEach(l => lowest_rock_row = Math.max(lowest_rock_row, l[0]));
  lowest_rock_row += 2;
  console.log('lowest_rock_row', lowest_rock_row);

  rocks = rock_pos.reduce((p, v) => {
    rocks[v[0]+','+v[1]] = v;
    return rocks;
  }, rocks);
};

init();
console.log('rocks', rocks);

const is_blocked = (pos) => {
  return rocks[pos[0]+','+pos[1]] != undefined || sands[pos[0]+','+pos[1]] != undefined || pos[0] == lowest_rock_row;
};

const run = () => {
  let cur_sand_rested = false;
  let units = 0;
  do {
    if (cur_sand == null || cur_sand_rested) {
      cur_sand = SAND_START.slice();
      cur_sand_rested = false;
      units++;
    }

    // move down
    cur_sand[0]++;

    // check if position below is blocked 
    if (is_blocked(cur_sand)) {
      DEBUG && console.log('blocked moving down, try moving left');
      // move left
      cur_sand[1]--;
      if (is_blocked(cur_sand)) {
        DEBUG && console.log('blocked moving left, try moving right');
        // undo moving left, then move right
        cur_sand[1]+=2;
        if (is_blocked(cur_sand)) {
          DEBUG && console.log('blocked moving right, settle');
          // undo moving right
          cur_sand[1]--;
          // undo moving down
          cur_sand[0]--;
          // settle
          cur_sand_rested = true;
          // add to sands
          sands[cur_sand[0]+','+cur_sand[1]] = cur_sand.slice();

          if (cur_sand[0] == SAND_START[0] && cur_sand[1] == SAND_START[1]) {
            console.log('Clogged up at the starting position');
            return units;
          }
        }
        else {
          DEBUG && console.log('moved down-right');
        }
      }
      else {
        DEBUG && console.log('moved down-left');
      }
    }
    else {
      DEBUG && console.log('moved down');
    }

    DEBUG && console.log('cur_sand', cur_sand);
    DEBUG && console.log('rocks', rocks);
    DEBUG && console.log('sands', sands);

    /*
    // check if below lowest rock formation
    if (cur_sand[0] >= lowest_rock_row) {
      return units;
    }
    */
  //} while (cur_sand[0] < lowest_rock_row);
} while (true);
};

let units_of_sand_before_overflow = run(); // - 1;
console.log('units of sand before overflow', units_of_sand_before_overflow);

