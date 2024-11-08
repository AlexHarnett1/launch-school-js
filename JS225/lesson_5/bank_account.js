/*
Create a BankAccount class with a private field balance. Add a private method,
#checkBalance, that logs the current balance. Provide a public method, deposit,
to add money to the account and withdraw to take money out. Raise a RangeError
if there are insufficient funds for the withdrawal.
*/

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#checkBalance();
    if (this.#balance < amount) {
      throw new RangeError('Insufficient funds for the withdrawal.');
    } else {
      this.#balance -= amount;
    }
  }

  #checkBalance() {
    console.log(this.#balance);
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds