function findNumbers(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      result.push(i);
    }
  }

  return result;
}

let n = 7;
console.log(findNumbers(n));
