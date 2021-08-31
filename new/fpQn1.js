console.log('working');
const a = 'aaaAabcBaD'; //B
const b = 'weTestCodErs'; //'NO'

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const upper = [];
  const lower = [];
  for (let i = 0; i < S.length; i++) {
    const n = S.charCodeAt(i);
    console.log(n);
    if (n < 90) {
      upper.push(n);
    } else {
      lower.push(n);
    }
  }

  upper.sort();
  console.log(upper);
  console.log(lower);
  let ans = 'NO';
  for (let i = 0; i < upper.length; i++) {
    console.log('----');
    const lowerNumber = upper[upper.length - (i + 1)] + 32;
    if (lower.includes(lowerNumber)) {
      ans = String.fromCharCode(upper[upper.length - (i + 1)]);
      console.log('1', ans);
      i = upper.length;
    }
    console.log('2', ans);
  }
  console.log(ans);
  return ans;
}

solution(a);
