function makeAccount(number) {
  let balance = 0;
  //let number = number;
  let transactions = [];
  return {
    deposit(amount) {
      balance += amount;
      this.addTransaction('deposit', amount);
      return amount;
    },
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }
      this.addTransaction('withdraw', amount);
      balance -= amount;
      return amount;
    },
    addTransaction(type, amount) {
      this.transactions().push({ type, amount });
    },
    balance() {
      return balance;
    },
    number() {
      return number;
    },
    transactions() {
      return transactions;
    },
  };
} 

function makeBank() {
  let accountNumber = 101;
  let accounts = [];
  return {
    openAccount() {
      let account = makeAccount(accountNumber);
      accountNumber += 1;
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    }
  };
}

let bank = makeBank();
console.log(bank.accounts);
// undefined