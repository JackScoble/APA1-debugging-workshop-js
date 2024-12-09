function calculatePercentageChange(original, newAmount) {
  return original === newAmount ? 0 : Math.trunc(((newAmount - original) / original) * 100);
}

module.exports = { calculatePercentageChange };
