const a = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const b = [1, 1]; // 1
const c = [4, 3, 2, 1, 4]; // 16
const d = [1, 2, 1]; // 2

var maxArea = function (height) {
  const n = height.length;

  let max = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);

    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
};

maxArea(c);
