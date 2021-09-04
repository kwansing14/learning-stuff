const a = 'III'; // 3
const b = 'IV'; // 4
const c = 'IX'; // 9

const legend = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    //test
    console.log(s[i]);
    console.log(legend[s[i]]);
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }
  console.log('total', total);
};

romanToInt(b);
