const a = 'abcabcbb';

const lengthOfLongestSubstring = function (str) {
  if (str.length === 0 || str === null) return 0;
  const map = {};
  let l = 0;
  let max = 0;
  for (let r = 0; r < str.length; r++) {
    let ch = str.charAt(r);
    // a
    map[ch] ? map[ch]++ : (map[ch] = 1);
    while (map[ch] > 1 && l < r) {
      map[str.charAt(l)]--;
      l++;
    }
    console.log(map);
    console.log('num', max, r, l);
    max = Math.max(max, r - l + 1);
  }
  console.log(max);
  return max;
};

lengthOfLongestSubstring(a);
