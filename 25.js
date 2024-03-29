const input = `22-=0-1-=
1-==1200200=22-1==2=
2-01=--01==01
20-=
21=210=002
12=-0002
1=100-==0
1101
2==-=0=0110-
2=100122==--1-
2=1-2==2--1
1==0=2=0==1100
2=0==-2
1=1222202101--=
1101=2111-11=
1=11=2022-11-0=
1=2=1102-
1--21=1--=
11-
1001-10-
201222-1-2
122--2
2-
11--2-=20=11-2=0
1-000=1221==2-
1=-==-=2-0
121-
1--2-=---0=01
1=00=010-1-20
1=110=2
1110-=01--0-12--0
200022-
2=-=0=-1==2-=2222
20201
11-0
1==
1-=---2==20=01
2=2=-1
1==01-100
1-=----=--=
1-011--20=1-==2121
101---1=-1--0=21--2
221=0100--020=11
1=-121=2=-1-=
11210-
1=0=2=22-==-==-
2=2220210221-202
1--1=---00-11
2=0--
1=-2=-1==2=0
1=0=0=
122012210-=010=1
21-1-220=21-=-00
2-=2==0
1220
20
1=0=22=-21101
2-===0==1-210
1=-220=121=----2
21=0=-=0---0===1=--
202-22112---0-2=
10=0
11
102120--=0-021-121
100--221=
2--011=-=202
1=-
110=0-0-021-
121
1-0210-0
2-10=2
2=-0-1=00--22
121-=2
12-212110-022-2211
1=222==11=-=-01=10
200-0120=
1-00===12=-1=-0--
100-1
102-2201
10-=0-==2=2==2=0
12=01
1012-2
1=0-02=21=1==1
2=021-
1-001-
10202-00=12===11-1
1=
20=11=0112=
2--1=1-1121
2-2=---222
1=-001==-0-
1-=112-=
11011
1=2==1
1-=2=2201
2==222-==
101-0-=2
1-10-0212-0==0-10
1-2-1-=01100
121=0-12-2
20=0=0-0
22000-==0-1-2=0=0=
10=
2101102
1120===10=2-2=02-
1-=10--211
2===-01==1=--===-
1=21-201-==200=
1=-=2=10
220-120=-0-1010
12011
1-0=2
1---01
1=-=1=021=0=0=011
1=10-212-0
2=
10-0=-1=
1-21=22=1101000-1-
11=00222-=100--`;

const example = `1=-0-2
12111
2=0=
21
2=01
111
20012
112
1=-1=
1-12
12
1=
122`;

const lines = input
  .split(/\n/);
console.log(lines);

const to_decimal = (snafu) => {
  let place = 0;
  let place_val = 0;
  let acc = 1;
  let val = 0;
  let n = snafu.length;
  let to = n - 1;
  let cur = -1;
  // console.log('snafu', snafu);
  // console.log('n', n);
  while (place < n) {
    // console.log('index', n - place - 1);
    cur = snafu[n - place - 1];
    // console.log('cur', cur);
    place_val = 5 ** place;
    // console.log('place', place, place_val);
    switch (cur) {
      case '-':
        val = val - place_val;
        break;
      case '=':
        val = val - (place_val * 2);
        break;
      default:
        val = val + (place_val * cur);   
        break;
    }
    // console.log('val', val);
    place++;
  }
  return val;
};

let test = `1
1-
1--
1---
1----
1-----
1------`.split(/\n/);
// console.log('test',test.map(v => to_decimal(v)));

// let sum = lines.reduce((p, v) => p + to_decimal(v), 0);
// console.log('sum', sum);

// to_decimal('122');

const to_radix = (num, radix) => {
  // console.log(num, radix);
  let converted = '';
  let result = num;
  while (result > 0) {
    converted = (result % radix) + converted;
    result = parseInt(result / radix);
    // console.log('converted', converted);
    // console.log('result', result);
  }
  // console.log('final', num, '=', converted);
  return parseInt(converted);
};

const to_snafu = (num) => {
  let converted = to_radix(num, 5).toString().split('').map(v => parseInt(v));
  let i = converted.length - 1;
  let snafu = '';
  let carry_over = false;
  let val;
  while (i >= 0) {
    val = converted[i];
    if (carry_over) {
      val += 1;  
      carry_over = false;
    }
    if (val > 2) {
      val = val - 5;
      if (val == -1) {
        val = '-';
      }
      else if (val == -2) {
        val = '=';
      }
      carry_over = true;
    }
    snafu = val + snafu;
    i--;
  }
  if (carry_over) {
    snafu = 1 + snafu;
  }
  console.log(num, '=', snafu);
  return snafu;
};

// `1747
// 906
// 198
// 11
// 201
// 31
// 1257
// 32
// 353
// 107
// 7
// 3
// 37
// 4890`.split(/\n/).map(v => to_snafu(v));

let sum = lines.reduce((p, v) => p + to_decimal(v), 0);
console.log('sum=' + sum, 'snafu=' + to_snafu(sum));