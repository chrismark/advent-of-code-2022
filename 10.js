const { extendWith } = require("lodash");

const input = `noop
addx 5
noop
noop
noop
addx 1
addx 2
addx 5
addx 2
addx 5
noop
noop
noop
noop
noop
addx -12
addx 18
addx -1
noop
addx 3
addx 5
addx -5
addx 7
noop
addx -36
addx 18
addx -16
noop
noop
noop
addx 5
addx 2
addx 5
addx 2
addx 13
addx -6
addx -4
addx 5
addx 2
addx 4
addx -3
addx 2
noop
addx 3
addx 2
addx 5
addx -40
addx 25
addx -22
addx 25
addx -21
addx 5
addx 3
noop
addx 2
addx 19
addx -10
addx -4
noop
addx -4
addx 7
noop
addx 3
addx 2
addx 5
addx 2
addx -26
addx 27
addx -36
noop
noop
noop
noop
addx 4
addx 6
noop
addx 12
addx -11
addx 2
noop
noop
noop
addx 5
addx 5
addx 2
noop
noop
addx 1
addx 2
addx 5
addx 2
addx 1
noop
noop
addx -38
noop
addx 9
addx -4
noop
noop
addx 7
addx 10
addx -9
addx 2
noop
addx -9
addx 14
addx 5
addx 2
addx -24
addx 25
addx 2
addx 5
addx 2
addx -30
addx 31
addx -38
addx 7
noop
noop
noop
addx 1
addx 21
addx -16
addx 8
addx -4
addx 2
addx 3
noop
noop
addx 5
addx -2
addx 5
addx 3
addx -1
addx -1
addx 4
addx 5
addx -38
noop`;

const sampleinput = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

const shortinput = `noop
addx 3
addx -5`;

const instructions = input.split(/\n/g).map(i => i.split(' ')).map(i => i.length == 2 ? [i[0], parseInt(i[1])] : i);
// console.log(instructions);

const CRT = new Array(6).fill().map(r => new Array(40).fill('.'));
// console.log(CRT);
let BUFFER = new Array(40).fill('.');
// console.log('BUFFER: ', BUFFER);

let cycle = 0;
let i = 0;
let done = false;
let instr = null;
let instr_cycle = 0;
let x = 1;
const NOOP = 'noop', ADDX = 'addx';
let cur_signal_str = 0;
let total_signal_str = 0;

const render_sprite = (buffer, pos) => {
  // console.log('BEFORE ', buffer.join(''));
  buffer[pos-1] = '#';  
  buffer[pos+1-1] = '#';
  buffer[pos+2-1] = '#';
  // console.log('AFTER  ', buffer.join(''));
};

const clear_buffer = (buffer) => buffer.fill('.');

const render_pixel = (screen, pos) => {
  console.log('Draw at pos ', pos);
  let r = Math.floor((pos - 1) / 40);
  let c = (pos % 40) - 1;
  console.log('draw at row ', r, ' column ', c);
  screen[r][c] = '#';
}

render_sprite(BUFFER, x);
console.log('after initial render: ', BUFFER.join(''));

do {
  if (instr == null) {
    instr = instructions[i];
    if (instr[0] == NOOP) {
      instr_cycle = 1;
    }
    else if (instr[0] == ADDX) {
      instr_cycle = 2;
    }
  }
  cycle++;
  // during
  
  if (BUFFER[(cycle % 40) - 1] == '#') { // matched a part of sprite in current cycle to draw
    render_pixel(CRT, cycle);
  }
  
  console.log('DURING cycle=' + cycle, BUFFER.join(''));
  console.log(CRT.map(r => r.join('')));

  if (cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) {
    cur_signal_str = cycle * x;
    total_signal_str += cur_signal_str;
  }

  false && console.log('DURING cycle=' + cycle, 'instr['+i+']=', instr, x, cur_signal_str, total_signal_str);

  // after
  instr_cycle--;
  if (instr_cycle <= 0) {
    if (instr[0] == NOOP) {
    
    }
    else if (instr[0] == ADDX) {
      x += instr[1];
    }
    clear_buffer(BUFFER);
    render_sprite(BUFFER, x);
    // clear for next instruction
    instr = null;
    instr_cycle = 0;
    i++;
  }
  false && console.log('AFTER cycle=' + cycle, 'instr['+i+']=', instr, x);
  console.log('AFTER cycle=' + cycle, BUFFER.join(''));

  if (i >= instructions.length && instr_cycle == 0) {
    done = true;
  }
} while (!done);

let output = CRT.map(r => r.join(''));
console.log(output);