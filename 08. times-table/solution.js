function printTimesTable(n) {
  for(let i = 1; i < 13; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
  }
}

module.exports = { printTimesTable };
