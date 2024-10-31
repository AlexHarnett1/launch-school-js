let invoices = {
  unpaid: [],
  paid: [],
  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },
  totalDue() {
    let total = 0;
    this.unpaid.forEach(element => {
      total += element.amount;
    });
    return total;
  },
  payInvoice(name) {
    let stillUnpaid = [];
    this.unpaid.forEach(element => {
      if (element.name === name) {
        this.paid.push(element);
      } else {
        stillUnpaid.push(element);
      }
    });
    this.unpaid = stillUnpaid;
  },
  totalPaid() {
    return this.paid.reduce((total, element) => total + element.amount, 0);
  },
};


console.log(invoices.totalDue());
invoices.add('Alex', 1500);
invoices.add('John', 450);
invoices.payInvoice('Alex');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
