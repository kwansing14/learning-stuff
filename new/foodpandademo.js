const a = [1, 3, 6, 4, 1, 2];
const b = [1, 2, 3];

function solution(A) {
  A.sort();
  let y = A[0];
  for (let i = 0; i < A.length; i++) {
    if (y === A[i]) {
      y = y + 1;
    }
  }
  //   console.log('ans', y);
  return y <= 0 ? 1 : y;
}

solution(b);
