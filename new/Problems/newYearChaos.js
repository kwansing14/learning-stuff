const a = [2, 1, 5, 3, 4]; // 3
const b = [2, 5, 1, 3, 4]; // too chaotic
const c = [5, 1, 2, 3, 7, 8, 6, 4]; // too chaotic
const d = [1, 2, 5, 3, 7, 8, 6, 4]; // 7

function minimumBribes(q) {
  // Write your code here
  let count = 0;
  let totalCount = 0;
  let ans = '';
  for (let i = 0, lens = q.length; i < lens; i++) {
    for (let j = 0, lens = q.length; j < lens; j++) {
      console.log('i' + i, 'j' + j);
      if (q[j] - j > 3) {
        ans = 'Too chaotic';
        i = q.length;
        j = q.length;
      }
      if (q[j] === i + 1) {
        if (j === i) {
          j = q.length;
        } else {
          if (j + 1 > q[j]) {
            [q[j], q[j - 1]] = [q[j - 1], q[j]];
            totalCount++;
            j = q.length;
            i--;
          }
        }
      }
    }
  }
  console.log(ans ? ans : totalCount);
}
let v = 1;
function minimumBribes2(q) {
  var v = 2;
  console.log(v);
}

minimumBribes2();
