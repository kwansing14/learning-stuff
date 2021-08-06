const a = ['flower', 'flow', 'flight']; // fl
const b = ['dog', 'racecar', 'car']; // ''
const c = ['a'];

const extractLetters = (str, i) => {
  const extracted = str.slice(0, i);
  return extracted;
};

const getMinLength = (strs) => {
  let min = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    min = Math.min(min, strs[i].length);
  }
  return min;
};
const checkSimilar = (obj, strs) => {
  let ans = '';
  let count = 0;
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs.length - 1; i++) {
    if (obj[i] === obj[i + 1]) {
      count++;
    } else {
      count = 0;
    }
    if (count === strs.length - 1) {
      ans = obj[i];
      count = 0;
    }
  }
  return ans;
};

var longestCommonPrefix = function (strs) {
  const minLength = getMinLength(strs);
  let obj = {};
  let ans = '';
  for (let j = 0; j < minLength + 1; j++) {
    for (let i = 0; i < strs.length; i++) {
      const a = extractLetters(strs[i], j);
      obj[i] = a;
    }
    const b = checkSimilar(obj, strs);
    b ? (ans = b) : '';
  }
  return ans;
};

longestCommonPrefix(c);
