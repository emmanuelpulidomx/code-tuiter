function combinatoria(n, m) {
  return factorial(n) / (factorial(m) * factorial(n - m));
}

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
