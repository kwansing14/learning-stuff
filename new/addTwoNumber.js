const a = [2, 4, 3];
const b = [5, 6, 4]; // [7,0,8]

const c = [9, 9, 9, 9, 9, 9, 9];
const d = [9, 9, 9, 9]; // [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
  let x = l1.reverse();
  let y = l2.reverse();
  x = x.join('');
  y = y.join('');

  let z = Number(x) + Number(y);
  z = z.toString().split('').reverse();
  console.log(x);
  console.log(y);
  console.log(z);
  return z;
};

addTwoNumbers(a, b);
