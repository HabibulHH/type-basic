class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Getter
  public getBalance(): number {
    return this.balance;
  }

  // Setter with validation
  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
  }
}

const account = new BankAccount(1000);

console.log(account.getBalance()); // 1000

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(2000); // Insufficient funds.

account.withdraw(300);
console.log(account.getBalance()); // 1200

// account.balance = 9999; // ❌ Error: Property 'balance' is private
