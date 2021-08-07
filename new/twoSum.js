const a = [2, 7, 11, 15];
const b = 9;
const c = [3, 2, 4];
const d = 6;

var twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const tot = nums[i] + nums[j];
        console.log(i, j, tot);
        if (tot === target) {
          ans.push(i);
          ans.push(j);
          j = nums.length;
          i = nums.length;
        }
      }
    }
  }
  console.log(ans);
};

twoSum(c, d);
