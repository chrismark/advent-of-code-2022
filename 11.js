const input = `Monkey 0:
Starting items: 89, 73, 66, 57, 64, 80
Operation: new = old * 3
Test: divisible by 13
  If true: throw to monkey 6
  If false: throw to monkey 2

Monkey 1:
Starting items: 83, 78, 81, 55, 81, 59, 69
Operation: new = old + 1
Test: divisible by 3
  If true: throw to monkey 7
  If false: throw to monkey 4

Monkey 2:
Starting items: 76, 91, 58, 85
Operation: new = old * 13
Test: divisible by 7
  If true: throw to monkey 1
  If false: throw to monkey 4

Monkey 3:
Starting items: 71, 72, 74, 76, 68
Operation: new = old * old
Test: divisible by 2
  If true: throw to monkey 6
  If false: throw to monkey 0

Monkey 4:
Starting items: 98, 85, 84
Operation: new = old + 7
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 7

Monkey 5:
Starting items: 78
Operation: new = old + 8
Test: divisible by 5
  If true: throw to monkey 3
  If false: throw to monkey 0

Monkey 6:
Starting items: 86, 70, 60, 88, 88, 78, 74, 83
Operation: new = old + 4
Test: divisible by 11
  If true: throw to monkey 1
  If false: throw to monkey 2

Monkey 7:
Starting items: 81, 58
Operation: new = old + 5
Test: divisible by 17
  If true: throw to monkey 3
  If false: throw to monkey 5`;

const exampleinput = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

//console.log(exampleinput);
let NUM = 0;
const MONKEYS = exampleinput
  .split(/\n/g)
  .filter(l => l.length > 0)
  .map(l => l.split(':').map(e => e.trim()))
  .reduce((p, c, i, a) => {
    if (c[0].indexOf('Monkey') == 0) {
      p.push({
        id: parseInt(c[0].split(' ')[1]),
        inspected: 0
      });
    }
    else if (c[0].indexOf('Starting') == 0) {
      p[p.length-1].items = c[1].replace(/\s/g, '').split(',').map(n => parseInt(n));
    }
    else if (c[0].indexOf('Operation') == 0) {
      // let ops =  'Math.floor((' + c[1].replace('new = ', '') + ') / 3)';
      let divisibleby = parseInt(a[i+1][1].replace('divisible by ', ''));
      // let ops =  '(' + c[1].replace('new = ', '') + ') * ' + divisibleby;
      let ops =  '(' + c[1].replace('new = ', '') + ') % ' + divisibleby;
      p[p.length-1].operation_string = ops;
      p[p.length-1].operation = (old, num = 0) => eval(ops);
    }
    else if (c[0].indexOf('Test') == 0) {
      let ops = c[1].replace('divisible by', 'val %') + ' == 0';
      p[p.length-1].test_string = ops;
      p[p.length-1].test = (val) => eval(ops);
    }
    else if (c[0].indexOf('If true') == 0) {
      p[p.length-1].if_true = (monkeys, item) => {
        let to = parseInt(c[1].replace('throw to monkey ', ''));
        DEBUG && console.log('throw ', item, ' to', to);
        monkeys[to].items.push(item);
      };
    }
    else if (c[0].indexOf('If false') == 0) {
      p[p.length-1].if_false = (monkeys, item) => {
        let to = parseInt(c[1].replace('throw to monkey ', ''));
        DEBUG && console.log('throw ', item, ' to', to);
        monkeys[to].items.push(item);
      };
    }
    return p;
  }, [])
  ;
const DEBUG = false;
const run_round = (rounds, monkeys) => {
  for (let r = 0; r < rounds; r++) {
    DEBUG && console.log('RUNNING ROUND ' + (r+1));
    if ([1,20,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000].indexOf(r+1) != -1) {
      NUM = r+1;
    }
    for (let m = 0; m < monkeys.length; m++) {
      let monkey = monkeys[m];
      DEBUG && console.log('Monkey ', m, ' num items ', monkey.items.length);
      if ([1,20,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000].indexOf(r+1) != -1) {
        console.log(monkeys[m].id + '> ' + monkeys[m].operation_string.replace(/num/g, NUM));
      }
      monkey.inspected += monkey.items.length;
      let items_to_inspect = monkey.items.length;
      for (let i = 0, n = monkey.items.length; i < n; i++) {
        // get item
        let item = monkey.items[0];
        DEBUG && console.log(monkey.id +'> Get item with worry level ', item);
        
        // calc new level
        DEBUG && console.log(monkey.id + '> ' + monkey.operation_string);
        item = monkey.operation(item, Math.abs(r-items_to_inspect));
        DEBUG && console.log(monkey.id +'> New item worry level ', item);

        if ([1,20,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000].indexOf(r+1) != -1) {
          console.log(monkey.id +'> New item worry level ', item);
        }

        // check 
        DEBUG && console.log(monkey.id + '> ' + monkey.test_string);
        if (monkey.test(item)) {
          monkey.if_true(monkeys, item);
        }
        else {
          monkey.if_false(monkeys, item);
        }
        // remove item from list
        monkey.items.shift();
      }
    }
    if ([1,20,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000].indexOf(r+1) != -1) {
      console.log('Round ', r+1);
      console.log(MONKEYS.map(m => { let {id, inspected} = m; return {id, inspected}; }));
    }
  }
  let inspected_times = MONKEYS.map(m => m.inspected);
  return inspected_times.pop();
}

run_round(20, MONKEYS);
// let val = 0;
// do {
//   NUM++;
//   val = run_round(1, MONKEYS);
//   console.log('last inspected times: ', val);
// } while (val < 6);
// console.log(MONKEYS);
// get 2 most active and multiply
let activities = MONKEYS.map(m => m.inspected).sort((a,b) => b-a);
let monkey_business = activities[0] * activities[1];
console.log(monkey_business);