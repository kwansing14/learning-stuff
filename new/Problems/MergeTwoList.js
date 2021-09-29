Input: (l1 = [1, 2, 4]), (l2 = [1, 3, 4]);
Output: [1, 1, 2, 3, 4, 4];

const a = [];
const b = [];
var mergeTwoLists = function (l1, l2) {
  console.log(l1, l2);
  const ans = [];
  let xx = 0;
  let yy = 0;
  while (l1.length > xx || l2.length > yy) {
    if (l1[xx] > l2[yy]) {
      ans.push(l2[yy]);
      yy++;
    } else {
      ans.push(l1[xx]);
      xx++;
    }
  }
  console.log(ans);
};

mergeTwoLists(a, b);
