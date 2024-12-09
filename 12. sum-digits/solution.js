function sumDigits(num) {
  let sum = 0;
  for (digit of String(num)) {
    sum += Number(digit);
  }
  return sum;
}

module.exports = { sumDigits };
