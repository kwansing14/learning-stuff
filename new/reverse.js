const a = 123;
const b = -123;
const c = 120;

const runReverse = (x) => {
  const a = [];
  const b = x.toString();
  for (let i = 0; i < b.length; i++) {
    a.push(b[b.length - i - 1]);
  }
  return Number(a.join(''));
};

var reverse = function (x) {
  let ans = 0;

  if (x < 0) {
    x *= -1;
    ans = runReverse(x);
    ans *= -1;
  } else {
    ans = runReverse(x);
  }
  if (ans > 2147483648 || ans < -2147483648) {
    ans = 0;
  }
  return ans;
};

reverse(c);
