const a = '()'; // true
const b = '()[]{}'; // true
const c = '(]'; // true
const d = '(){}}{'; // false
const e = '{[]}'; // true
const f = '({{{{}}}))'; // false
const g = '([]){'; // false
const h = ')(){}'; // false
// var isValid = function (a) {
//   let ans = false;
//   let open = [];
//   let counter = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === '(' || a[i] === '[' || a[i] === '{') {
//       open.push(a[i]);
//     }
//     if (a[i] === ')' || a[i] === ']' || a[i] === '}') {
//       console.log(a[i]);
//       console.log('open', open);
//       const test = open.pop();
//       console.log('test', test, a[i]);
//       if (test === undefined) {
//         i = a.length;
//         ans = false;
//       }
//       if (test === '{') {
//         if (a[i] === '}') {
//           ans = true;
//         } else {
//           ans = false;
//           i = a.length;
//         }
//       }
//       if (test === '[') {
//         if (a[i] === ']') {
//           ans = true;
//         } else {
//           ans = false;
//           i = a.length;
//         }
//       }
//       if (test === '(') {
//         if (a[i] === ')') {
//           ans = true;
//         } else {
//           ans = false;
//           i = a.length;
//         }
//       }
//     }
//   }
//   if (open.length > 0) {
//     ans = false;
//   }
//   console.log(ans);
//   return ans;
// };

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    console.log(c);
    console.log('stack', stack);
    switch (c) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
};

isValid(b);
