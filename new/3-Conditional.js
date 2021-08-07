function conditioning(n) {
  let ans = '';
  if (n % 2 === 0) {
    ans = 'Weird';
    if (n > 1 && n < 6) {
      ans = 'Not Weird';
    }
    if (n > 5 && n < 21) {
      ans = 'Weird';
    }
  }

  if (n % 2 === 1) {
    // odd
    ans = 'Weird';
  }
  console.log(ans);
}

conditioning(4);
