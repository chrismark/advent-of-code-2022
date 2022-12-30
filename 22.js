const fs = require('fs');
const input = fs.readFileSync('./22.txt').toString();
console.log(input);

const example = `        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`;

const lines = input.split(/\n/);
const path = lines.pop().split(/(L|R)/).map(v => isNaN(parseInt(v)) ? v : parseInt(v));
lines.pop();
const map = lines
  .map(v => v.split(''))
  .reduce((p, c) => {
    let start = c.findIndex(e => e == '.' || e == '#');
    let end = c.lastIndexOf('.');
    end = Math.max(end, c.lastIndexOf('#'));
    // Each row of the map becomes an object with 
    // - an chunk of the map in Array form
    // - start and end (column) positions
    p.push({ chunk: c, start: start, end: end });
    return p;
  }, []);
const SCORE_DIR = {R: 0, D: 1, L: 2, U: 3};
const R = 'R', D = 'D', L = 'L', U = 'U';
const YOU = {pos: [0,0], dir: R}
const WALL = '#', OPEN = '.', EMPTY = ' ';

console.log(map);
console.log(path);

YOU.pos[1] = map[0].chunk.findIndex(e => e == '.');
console.log(YOU);

const move = (map, n) => {
  if (YOU.dir == R) {
    let row = map[YOU.pos[0]];
    for (let i = 0; i < n; i++) {
      YOU.pos[1]++;
      // console.log('moved to tile', row.chunk[YOU.pos[1]], JSON.stringify(YOU));

      // Went right past end, wrap back to start only if start isn't a wall
      if (YOU.pos[1] > row.end) {
        if (row.chunk[row.start] != WALL) { 
          // if row.start is not a wall then allow wrap
          YOU.pos[1] = row.start;
          // console.log('Allow wrap around to tile', row.chunk[YOU.pos[1]], JSON.stringify(YOU));
        }
        else {
          // else, stop
          YOU.pos[1]--;
          // console.log('We hit a wall if we wrap around so move back.', JSON.stringify(YOU));
          return;
        }
      }
      // Encountered a wall
      else if (row.chunk[YOU.pos[1]] == WALL) {
        YOU.pos[1]--; // move back and stay
        // console.log('We hit a wall if we move so move back.', JSON.stringify(YOU));
        return;
      }
    }
  }
  else if (YOU.dir == D) {
    let row = null;
    for (let i = 0; i < n; i++) {
      row = YOU.pos[0];
      do {
        // Keep moving down while current tile is EMPTY
        row++;
        // Check if we need to wrap
        if (row >= map.length) {
          row = 0;
        }
      } while (map[row].chunk[YOU.pos[1]] == EMPTY || map[row].chunk[YOU.pos[1]] == undefined);

      // Check if we hit a wall
      if (map[row].chunk[YOU.pos[1]] == WALL) {
        // do nothing and stay
        return;
      }
      else {
        YOU.pos[0] = row;
      }
    }
  }
  else if (YOU.dir == L) {
    let row = map[YOU.pos[0]];
    for (let i = 0; i < n; i++) {
      YOU.pos[1]--;    
      // Went right past start, wrap back to end only if end isn't a wall
      if (YOU.pos[1] < row.start) {
        if (row.chunk[row.end] != WALL) { 
          // if row.end is not a wall then allow wrap
          YOU.pos[1] = row.end;
        }
        else {
          // else, move back and stay
          YOU.pos[1]++;
          return;
        }
      }
      // Encountered a wall
      else if (row.chunk[YOU.pos[1]] == WALL) {
        YOU.pos[1]++; // move back and stay
        return;
      }
    }
  }
  else if (YOU.dir == U) {
    let row = null;
    for (let i = 0; i < n; i++) {
      row = YOU.pos[0];
      do {
        // Keep moving up while current tile is EMPTY
        row--;
        // Check if we need to wrap
        if (row < 0) {
          row = map.length - 1;
        }
      } while (map[row].chunk[YOU.pos[1]] == EMPTY || map[row].chunk[YOU.pos[1]] == undefined);

      // Check if we hit a wall
      if (map[row].chunk[YOU.pos[1]] == WALL) {
        // do nothing and stay
        return;
      }
      else {
        YOU.pos[0] = row;
      }
    }
  }
};

const turn = (dir) => {
  if (dir == L) {
    if (YOU.dir == R) {
      YOU.dir = U;
    }
    else if (YOU.dir == U) {
      YOU.dir = L;
    }
    else if (YOU.dir == L) {
      YOU.dir = D;
    }
    else if (YOU.dir == D) {
      YOU.dir = R;
    }
  }
  else if (dir == R) {
    if (YOU.dir == R) {
      YOU.dir = D;
    }
    else if (YOU.dir == D) {
      YOU.dir = L;
    }
    else if (YOU.dir == L) {
      YOU.dir = U;
    }
    else if (YOU.dir == U) {
      YOU.dir = R;
    }
  }
};

const follow_path = (map, path) => {
  path.forEach(p => {
    // console.log('p', p);
    if (typeof p == 'number') {
      // console.log('BEFORE move', JSON.stringify(YOU));
      move(map, p);
      // console.log('AFTER move', JSON.stringify(YOU));
    }
    else {
      // console.log('BEFORE turn', JSON.stringify(YOU));
      turn(p);
      // console.log('AFTER turn', JSON.stringify(YOU));
    }
  });
};

follow_path(map, path);
console.log('YOU', YOU);

let password = (YOU.pos[0] + 1) * 1000 + (YOU.pos[1] + 1) * 4 + SCORE_DIR[YOU.dir];
console.log('password', password);