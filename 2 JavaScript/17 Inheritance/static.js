console.log("Class (Inheritance)");

class MathUtils {
  // Static method
  static add(a, b) {
    return a + b;
  }
}
// Call the static method
console.log(MathUtils.add(5, 3)); // Output: 8

// Example 1
console.log("Example 1");
class AccountHolder {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountBalalce = 0;
  }

  credit(amount) {
    this.accountBalalce += amount;
  }

  debit(amount) {
    this.accountBalalce -= amount;
  }

  getAccountBalance() {
    console.log(
      `${this.firstName + " " + this.lastName}'s account balance is: ${
        this.accountBalalce
      }`
    );
  }
}

let smriti = new AccountHolder("Smriti", "Cat");
smriti.getAccountBalance();
smriti.credit(1000);
smriti.debit(200);
smriti.getAccountBalance();
//AccountHolder.getAccountBalance();

// Example 2
console.log("Example 2");
class AccountHolder1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountBalalce = 0;
  }

  static rateOfInterest = 4;
  static getRateOfInterest() {
    console.log(`Rate of interest is: ${this.rateOfInterest}%`);
  }

  credit(amount) {
    this.accountBalalce += amount;
  }

  debit(amount) {
    this.accountBalalce -= amount;
  }

  getAccountBalance() {
    console.log(
      `${this.firstName + " " + this.lastName}'s account balance is: ${
        this.accountBalalce
      }`
    );
  }
}

let John = new AccountHolder1("John", "Cat");
John.getAccountBalance();
John.credit(1000);
John.debit(500);
John.getAccountBalance();

AccountHolder1.getRateOfInterest();
