Input: (nums = [1, 3, 5, 6]), (target = 5); // 2
const a = [1, 3, 5, 6];
const b = 0;
var searchInsert = function (nums, target) {
  let c = '';
  for (let i = 0; i < nums.length; i++) {
    c = i;
    // console.log('check', nums[i], target);
    if (nums[i] >= target) {
      console.log('c', c);
      return;
    }
  }
  // console.log('l', nums.length);
  return nums.length;
};

searchInsert(a, b);
