const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const b = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const c = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const flipHorizontally = (object) => {
  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object.length; j++) {
      const temp = object[i][j];
      object[i][j] = object[i][object.length - (j + 1)];
      object[i][object.length - (j + 1)] = temp;
      if (j >= object.length / 2 - 1) {
        j = object.length;
      }
    }
  }
  return object;
};

const flipDiagonally = (object) => {
  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object.length; j++) {
      if (i > j) {
        j = i;
      }
      const temp = object[j][i];
      object[j][i] = object[i][j];
      object[i][j] = temp;
    }
  }
  return object;
};

const rotate = (x) => {
  console.log('x', x);

  const res = x;
  const res2 = flipDiagonally(res);
  const res3 = flipHorizontally(res2);
  console.log('');
  console.log('ans:');
  console.log(res3[0]);
  console.log(res3[1]);
  console.log(res3[2]);
  console.log(res3[3]);
  console.log(res3[4]);
};

rotate(c);
