function invoiceTotal(...args) {
  let sum = 0;
  args.forEach(value => sum += value);
  console.log(sum);
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?