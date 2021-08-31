const a = 'acbcbba'; // 1
const b = 'xaaxxa'; // 2

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  for (let i = 0; i < S.length; i++) {
    obj[S[i]] ? obj[S[i]]++ : (obj[S[i]] = 1);
  }
  const keys = Object.keys(obj);
  console.log(keys);
  const ans = [];
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    console.log(obj[keys[i]]);
    if (obj[keys[i]] % 2 !== 0) {
      console.log('ans', keys[i]);
      ans.push(keys[i]);
    }
  }
  console.log('final ans', ans);
  console.log(ans.length);
}

solution(a);
