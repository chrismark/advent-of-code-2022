const { result } = require("lodash");

const input = `abaaaaaccccccccaaaaaaaaaaccccaaaaaaaaaccccaacccccccccccccccccccccaaaaaaaaaaaccaaaaaaaaaccccccccccaaaaaaaacaaaaaaccccccccccccccccccccccccccccccccccccccccccaaaaa
abaaaaaaaccccccaaaaaaaaaacccccaaaaaacccccaaaacccccccccccccaacccccaaaaaaaaaaaacaaaaaaaaacccccccccaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaa
abacaaaaaccccccccaaaaaacccccccaaaaaacccccaaaacccccccccccccaacccaaaaaaaaaaaaaacaaaaaaaaccccccccccaaaaaaaaaaaaaaaaccccccccccccccccccccccccccaaaccccccccccccccaaaa
abccaacccccccccccaaaaaaccccccaaaaaaacccccaaaacccaacccccaaaaaaaaaaaaaaaaaaaaacaaaaaaaccccccccccccacaaaaaccaaaaaaaccccccccccccccccccccccccccaaccccccccccccccaaaaa
abcaaccccccccaaaaaaaaaaccccccaaacaaaccccccccccccaaaaaccaaaaaaaaaaaaaaaaaaaaaccaccaaacccccccccccccccaaaacccaaaaaaccccccccccccccccccccccccccaaacccccccccccccaaaca
abcccccccccccaaaaaaaaaaaaacccccccccacccccccccccaaaaacccccaaaacaaaaaaaaaaaaccccaaaaaaccccccccaaacccccaaccccaacccccccccccccccccccccccaaaaccaaaccccccccccccccccccc
abccccccccccaaaaaaccccaaaacccccccccccccccccccccaaaaaaccccaaaaaaaaaaaaaacaaacccaaaaaaaacccccaaaaaacccccccccccccccccccccccccccccccccccaaaaaaaaacccccccccccccccccc
abacccccccccaaaaaacccccaaacaaacccccccccacccaaccccaaaacccaaacaaaaaaaaaaacccccccaaaaaaaacccccaaaaaaccccccccccccccccccccccccccccccccjjjjjjjaaaaaaaaaccccaacccccccc
abaccccccccccaaaaaccaaaaaaaaaaccaccccccaacaaacccaaccccccaacccaaaaaaaaaaacccccccaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccijjjjjjjjjhhhhhhhhhcaaaaaaccccc
abaacccccccccaaaccccaaaaaaaaaaaaaccccccaaaaacccccccccccccccccccccaaaaaaacccccccaaaaaccccccccaaaaacccccccccccccccaaaaccccccccccciijjjjjjjjjhhhhhhhhhhcaaaaaccccc
abaaccccccccccccccccccaaaaaacaaaaaacccccaaaaaacccccccccccaaacccccaaaccccccccccaaaaaaccccccccaacaacccccccccccccccaaaaccccccccccciiioooooojjhhhhpphhhhhaaaaaccccc
abacccccccccccccccccccaaaaaaccaaaaacccaaaaaaaacccccccccccaaaaaaccaacccccccccccccccaaccccccccacccccccccccccccccccaaaaccccccccccciiioooooooooopppppphiiaaaaaacccc
abaccccccccccaaaaaccccaaaaaaaaaaaaccccaaaaaaaacccccccccaaaaaaaaccccccccccccaaaaccccccccccccaaacccccccccccccccccccaaccccccccccciiinnoouuooooopppppppiiaaaaaacccc
abcccccccccccaaaaaccccaaacaaaaccaacccccccaaccccccccccccaaaaaaaaccccccccccccaaaaccccccccaaacaaacccccccccccccccccccccccccccccccciiinnotuuuuoopuuuupppiiaaacaccccc
abccccccccccaaaaaaccccaccccccccccccccccccaaccccccccccccaaaaaaacccccccaaacccaaaaccccccccaaaaaaaaaacccaacccccccccccccccccccccccciiinntttuuuuuuuuuuuppiiiaaccccccc
abaaccccccccaaaaaaccccccccccccccccccaaaacccccccccccccccccaaaaaacccccaaaaccccaaccccccccccaaaaaaaaacccaaacaaacaaaccccccccccaaccciiinntttxxuuuuuuuuuppiiiccccccccc
abaacccccccccaaaaaccccccccccccccccccaaaaccccccccaccccccccaaaaaacccccaaaaccccccccccccccccccaaaaacccccaaaaaaacaaaacccccccccaaaaiiiinnttxxxxuuyyyuvvppiiiccccccccc
abaacccccccccaaaccccccccccccccccccccaaaaccaaacaaaacccccccaaccccccccccaaacccccccccccccccccaaaaaaccccccaaaaaacaaaacccccccccaaaaiiinnnttxxxxxxyyyvvppqiiiccccccccc
abaccccccccccccccccccccaaccccccccccccaacccaaaaaaaacccccccccccccccccccccccccccccccccccaacaaaaaaacccaaaaaaaaccaaaccccccccaaaaahhhinnntttxxxxxyyyvvqqqiiiccccccccc
abcccccccccccccccccccaaaaaaccccccccccccccccaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaacaaacccaaaaaaaaaccccccccccccaaaaahhhnnnttttxxxxyyyvvvqqqiiiccccccccc
SbcccccccccccccccccccaaaaaaccccccccccccccccaaaaaaaaaccccccccccccccccccccccccccccccaaaaacccccccacccaaaaaaaaaacccccccccccccaahhhnnntttxxxEzzzyyyvvvqqqjjjcccccccc
abcccccccccccccccccccaaaaacccccccccccccaaaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaaaccccccccccccaaacaaacccccccccccccahhhmmmtttxxxxxyyyyyyyvvvqqqjjjccccccc
abccccccccccccccccccccaaaaacccccccccaacaaaaaaaaaaaaccccaccaaaccccccccccccccccccccaaaaaaaaccccccccccccaaacccccccccccccaaccahhhmmmtttxxxyywyyyyyyvvvqqqjjjccccccc
abccccccccccccccccccccaaaaacccccccccaaaaaaaacaaacccccccaaaaaaccccaccaaaccccccccccaaaaaaaaccccccccccccaacccccccccccccaaaccchhhmmmsssxxwwwyyywyyvvvvqqqjjjccccccc
abccaacccccccccccccccccccccccccccccccaaaaaaccaaacccccccaaaaaaccccaacaaacccccccccccacaaacccccccccccccccccccccccccaaaaaaaccchhhmmmssssswwwwyywwvvvvvqqqjjjdcccccc
abccaaaccaaccccccccccccccccccccccccaaaaaaaaccaaccccccccaaaaaaacccaaaaaccccccccccccccaaacccccccccccccccccccccccccaaaaaaaaaahhhmmmmsssssswwywwwrvvqqqqqjjjdddcccc
abccaaaaaaacccccaaaccccccccccccccccaaaaacaacccccccccccaaaaaaaaccccaaaaaaccccccccaaaccccccccccccccccccccccccccccccaaaaaaaaahhhgmmmmmsssswwwwwrrrrrqqqjjjjdddcccc
abcccaaaaaacccccaaacacccccccccccccccccaaaccaacccccccccaaaaaaaaccaaaaaaaacaaccccaaaacccccccccccccccccccccccccccccccaaaaaaaccggggmmmmmmssswwwwrrrrrkjjjjjddddcccc
abaaaaaaaaccccaacaaaaaccccaaacccccccccaaaccaaccccccccccccaaaccccaaaaacaaaaaccccaaaacccccccccccaacccccccccccaaccccaaaaaacccccgggggmmmllssswwrrrkkkkkjjjddddacccc
abaaaaaaaaacccaaaaaaaaccccaaaacccccccccaaaaaaccccccccccccaaacccccccaacccaaacaaacaaaccccccccccaaaacccccccaaaaaacccaaaaaaacccccgggggglllsssrrrrrkkkkkkdddddaacccc
abaaaaaaaaaacccaaaaaccccccaaaaccccccccccaaaaaaaccccccaaccccccccccccaaaaaaaaaaaaccccccccccccccaaaacccccccaaaaaccccaaccaaacccccccggggglllsrrrrrkkkeeedddddaaccccc
abaacaaaaaaaccccaaaaacccccaaaccccccccccccaaaaaaccccaaaaccccccccccccccaaaaaaaaacccccccccccccccaaaacccccccaaaaaaacccccccaacccccccccgggglllrrrrkkkeeeeeddaaaaccccc
abaaaaaacccccccaaacaacccccccccccccccccccaaaaaccccccaaaaaaccccccccaaacccaaaaacccccccccccccccccccccccccccaaaaaaaacccccccccccccccccccggfllllllkkkeeeeeccaaaaaacccc
abaaaaacccccccccaacccccccccccccccccccccaaaaaacccccccaaaacccccacccaaccccaaaaaaccccccccccccccccccccccccccaaaaaaaacccccccccccaacccccccffflllllkkkeeeccccaaaaaacccc
abaaaaacccccccccccccccccccccccccccaacccccccaaccccccaaaaacccccaaaaaaaccaaaaaaaaaaccccccccccccccccccccccccacaaacccccccccaaccaaccccccccfffllllkeeeecccccaacccccccc
abaaaacccccccccccccccccccccccccccaaacccccccccccccccaacaacccccaaaaaaccaaaaacaaaaaccccccccccccccccccccccccccaaacccccccccaaaaaaccccccccffffffffeeeeccccccccccccccc
abaaaccccccccccccccccccccccccccccaaaaacacccccccccccccccccccccaaaaaaaaaaaaccaaaaaaaaccccccaaccccccccccaaaaacccccccccccccaaaaaaacccccccfffffffeeaaccccccccccccaaa
abaacccccaacaacccccccccccccaacaaaaaaaaaacccccccaaccccccccccccaaaaaaaaaaacccaaaaaaaacccccaaacaacccccccaaaaaccccccccccaaccaaaaaaccccccccafffffeaacccccccccccccaaa
abaaaccccaaaaacccccccccccccaacaaaaaaaaaaccccccaaaccccccccccccaaaaaaaaaaaccccaaaaaccccccccaaaaaccccccaaaaaacccccccaacaaaaaaaaccccccccccaaacccccccccccccccccccaaa
abccccccccaaaaacccccccccaaaaaaaaaaaaaacccccaaaaacaaccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaacccccccaaaaaacccccccaaaaaaaacaaccccccccccaaaccccccccccccccccaaaaaa
abcccccccaaaaaacccccccccaaaaaaaaaaaaaacccccaaaaaaaaccccccaaaaacaaaaaaaaaaaaaaaaaaacccccaaaaaaaacccccaaaaaaccccccaaaaaaaaccaacccccccccccccccccccccccccccccaaaaaa`;

const example = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

const example2 = `ccccccccccccccccccccccaaaaaaaaacccccccccccccccccc
cccccccccccccccccccjjjjjjjaaaaaaaaaccccaacccccccc
ccccccccccccccccccijjjjjjjjjhhhhhhhhhcaaaaaaccccc
ccaaaaccccccccccciijjjjjjjjjhhhhhhhhhhcaaaaaccccc
ccaaaaccccccccccciiioooooojjhhhhpphhhhhaaaaaccccc
ccaaaaccccccccccciiioooooooooopppppphiiaaaaaacccc
cccaaccccccccccciiinnoouuooooopppppppiiaaaaaacccc
cccccccccccccccciiinnotuuuuoopuuuupppiiaaacaccccc
cccccccccccccccciiinntttuuuuuuuuuuuppiiiaaccccccc
accccccccccaaccciiinntttxxuuuuuuuuuppiiiccccccccc
abcccccccccaaaaiiiinnttxxxxuuyyyuvvppiiiccccccccc
Sbcccccccccaaaaiiinnnttxxxxxxyyyvvppqiiiccccccccc
abcccccccaaaaahhhinnntttxxxxxyyyvvqqqiiiccccccccc
cccccccccaaaaahhhnnnttttxxxxyyyvvvqqqiiiccccccccc
cccccccccccaahhhnnntttxxxEzzzyyyvvvqqqjjjcccccccc
cccccccccccahhhmmmtttxxxxxyyyyyyyvvvqqqjjjccccccc
cccccccaaccahhhmmmtttxxxyywyyyyyyvvvqqqjjjccccccc
ccccccaaaccchhhmmmsssxxwwwyyywyyvvvvqqqjjjccccccc
ccaaaaaaaccchhhmmmssssswwwwyywwvvvvvqqqjjjdcccccc
ccaaaaaaaaaahhhmmmmsssssswwywwwrvvqqqqqjjjdddcccc
cccaaaaaaaaahhhgmmmmmsssswwwwwrrrrrqqqjjjjdddcccc
ccccaaaaaaaccggggmmmmmmssswwwwrrrrrkjjjjjddddcccc
cccaaaaaacccccgggggmmmllssswwrrrkkkkkjjjddddacccc
cccaaaaaaacccccgggggglllsssrrrrrkkkkkkdddddaacccc
cccaaccaaacccccccggggglllsrrrrrkkkeeedddddaaccccc
acccccccaacccccccccgggglllrrrrkkkeeeeeddaaaaccccc
acccccccccccccccccccggfllllllkkkeeeeeccaaaaaacccc
acccccccccccaacccccccffflllllkkkeeeccccaaaaaacccc
ccccccccaaccaaccccccccfffllllkeeeecccccaacccccccc
ccccccccaaaaaaccccccccffffffffeeeeccccccccccccccc
cccccccccaaaaaaacccccccfffffffeeaaccccccccccccaaa
ccccccaaccaaaaaaccccccccafffffeaacccccccccccccaaa
cccaacaaaaaaaaccccccccccaaacccccccccccccccccccaaa
cccaaaaaaaacaaccccccccccaaaccccccccccccccccaaaaaa
ccaaaaaaaaccaacccccccccccccccccccccccccccccaaaaaa`;

let grid = input.split(/\n/g);
// console.log(grid);
const COL_TOTAL = grid[0].length;
const ROW_TOTAL = grid.length;
grid = grid.map(v => v.split(''));
// console.log(grid);
console.log(ROW_TOTAL, COL_TOTAL);

const GRID = input.replace(/\n/g, '');
console.log(GRID);


const start_pos = GRID.indexOf('S');
const end_pos = GRID.indexOf('E');
console.log(GRID.charAt(start_pos));
const ELEVATION_SCORE = 'abcdefghijklmnopqrstuvwxyz';
const get_elevation = (e) => e == 'S' ? 0 : (e == 'E' ? ELEVATION_SCORE.indexOf('z') : ELEVATION_SCORE.indexOf(e));
const get_row_col = (pos) => [Math.round(pos / COL_TOTAL), (pos % COL_TOTAL)];
const get_pos = (row, col) => COL_TOTAL * row + col;
const get_at = (row, col) => GRID[ get_pos(row, col) ];
const get_at2 = (pos) => GRID[ get_pos(pos[0], pos[1]) ];


console.log('START: ', start_pos, get_row_col(start_pos));
console.log('END: ', end_pos, get_row_col(end_pos));
console.log('END POS: ', get_pos(2, 5), GRID[get_pos(2, 5)]);
// console.log(get_at(2,8));
// console.log(get_at(1,3));
// console.log(get_at(2,3));
// console.log(get_at(3,3));
// console.log(get_at(4,3));
// console.log(get_at(0,0));
// console.log(get_at(4,7));

const DEBUG = false;
const prev_pos_set = new Set();

const display = () => {
  for (let i = 0; i < grid.length; i++) {
    let line = '';
    for (let j = 0; j < grid[i].length; j++) {
      if (prev_pos_set.has(i + ',' + j)) {
        line += '*';
      }
      else {
        line += grid[i][j];
      }
    }
    console.log(line);
  }
};

const get_ok_pos = (row, col) => {
  if (row < 0 || row > (ROW_TOTAL-1) || col < 0 || col > (COL_TOTAL-1)) return null;
  return [row,col];
}

const get_candidates = (cur_pos, prev_pos) => {
  let up = get_ok_pos(cur_pos[0]-1, cur_pos[1]);
  let down = get_ok_pos(cur_pos[0]+1, cur_pos[1]);
  let left = get_ok_pos(cur_pos[0], cur_pos[1]-1);
  let right = get_ok_pos(cur_pos[0], cur_pos[1]+1);
  let c = [right,up,down,left];
  // DEBUG && console.log('before ', JSON.stringify(c));
  c = c.filter(e => e != null);
  // DEBUG && console.log('after ', JSON.stringify(c));
  if (prev_pos) {
    c = c.filter(e => prev_pos.has(e[0]+','+e[1]) == false);
  }
  // DEBUG && console.log('after ', JSON.stringify(c));
  let score_cur = get_elevation(get_at2(cur_pos));
  c = c.filter(e => {
      let score_new = get_elevation(get_at2(e));
      // DEBUG && console.log('score new ', e, get_at2(e), score_new);
      // DEBUG && console.log('score cur ', cur_pos, get_at2(cur_pos), score_cur);
      // DEBUG && console.log('score_new == score_cur', score_new == score_cur);
      // DEBUG && console.log('(score_new - score_cur) == 1', (score_new - score_cur), (score_new - score_cur) == 1);
      // DEBUG && console.log('(score_new - score_cur) <= -1', (score_new - score_cur), (score_new - score_cur) <= -1);
      return (score_new == score_cur || (score_new - score_cur) == 1 || (score_new - score_cur) <= -1);
    });
  // DEBUG && console.log('after ', JSON.stringify(c));
  return c;
};

const orig_find_E = (cur_pos, prev_pos) => {
  // DEBUG && console.log('prev_pos: ', prev_pos.entries());
  DEBUG && console.log('cur_pos: ', cur_pos);
  DEBUG && console.log('cur: ', get_at2(cur_pos));
  // Found
  if (get_at2(cur_pos) == 'E') return [[2, [cur_pos]]];
  
  // get next candidate positions
  let candidates = get_candidates(cur_pos, prev_pos); 
  DEBUG && console.log('candidates: ', candidates);
  // dead end
  if (candidates.length == 0) return [[0, [cur_pos]]]; 

  let results = [];
  candidates.forEach(e => prev_pos.add(e[0]+','+e[1]));
  for (let i = 0; i < candidates.length; i++) {
    let results2 = orig_find_E(candidates[i], prev_pos);
    DEBUG && console.log('results2: ', i, results2);
    for (let j = 0; j < results2.length; j++) {
      if (results2[j][0] == 2) {
        results2[j][1].push(cur_pos);
        results.push([2, results2[j][1]]);
      }
    }
  }
  if (results.length > 0) {
    results.sort((a,b) => a[1].length - b[1].length);
    let fewest = results[0];
    let results_to_keep = [results[0]];
    for (let i = 1; i < results.length; i++) {
      if (results[i][0] == fewest) {
        results_to_keep.push(results[i]);
      }
    }
    results = results_to_keep;
  }
  return results;
};

const find_E = (initial, prev_pos) => {
  DEBUG && console.log('initial', initial);
  let stack = [];
  let path = [];
  let found = false;
  let candidates = [initial];
  let cur = 0;
  let tmp = null;
  while (!found) {
    // for each candidate loop
    //  if candidate matches E
    //   add to path
    //   set found to true
    //   break
    //  endif
    //
    //  tmp <- generate candidates
    //  if there are candidates
    //   push candidates to stack
    //   candidates <- tmp
    //   reset counter to 0
    //  endif
    // endfor
    //   
    // if found
    //  while stack not empty
    //   pop stack and put current candidate into path
    // else
    //  content <- stack.pop
    //  cur <- content.couter
    //  candidates <- content.candidates
    //

    for (; cur < candidates.length; ) {
      DEBUG && console.log('At', candidates[cur], get_at2(candidates[cur]));
      if (get_at2(candidates[cur]) == 'E') {
        DEBUG && console.log('Adding to path');
        path.push(candidates[cur]);
        found = true;
        break;
      }
      prev_pos.add(candidates[cur][0] + ',' + candidates[cur][1]);
      DEBUG && display();
      tmp = get_candidates(candidates[cur], prev_pos);
      if (tmp.length > 0) {
        DEBUG && console.log('New candidates', tmp);
        stack.push({
          counter: cur,
          candidates: candidates
        });
        candidates = tmp;
        tmp = null;
        cur = 0;
        DEBUG && console.log('Pushed previous candidates into stack');
        continue;
      }
      else {
        DEBUG && console.log('No candidates generated.');
      }
      cur++;
    }
    if (found) {
      while (stack.length > 0) {
        tmp = stack.pop();
        if (tmp) {
          DEBUG && console.log('Adding to path', tmp);
          path.push(tmp.candidates[tmp.counter]);
        }
      }
    }
    else {
      tmp = stack.pop();
      if (tmp) {
        cur = tmp.counter;
        candidates = tmp.candidates;
        DEBUG && console.log('Popped previous candidates from stack');
      }
    }
    DEBUG && console.log('stack length', stack.length, 'cur', cur, 'candidates length', candidates.length);
    if (stack.length == 0 && cur >= candidates.length) {
      DEBUG && console.log('Did not find path to E.');
      break;
    }
  }
  return path;
};

let S_pos = get_row_col(GRID.indexOf('S'));
console.log('S_pos: ', S_pos);
// prev_pos_set.add('-1,-1');
prev_pos_set.add(S_pos[0]+','+S_pos[1]);
let path = find_E(S_pos, prev_pos_set);
console.log('path', path);
if (path.length > 0) {
  path.sort((a, b) => a[1].length - b[1].length);
  console.log(path.length-1);
  // let least_num_path = path[0][1].length - 2;
  // console.log(least_num_path);
}
// console.log('prev_pos_set: ', prev_pos_set);
console.log('prev_pos_set size: ', prev_pos_set.size);



