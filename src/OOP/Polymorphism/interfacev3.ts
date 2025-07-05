interface Address {
    city: string;
    country: string;
}

interface Person {
    name: string;
    age: number;
    bloodGroup: string;
    email: string;
    dob: Date;
    phone: string;
}

interface Student extends Person, Address {
    courses: string[];
    amount: number;
}

interface Teacher extends Person, Address {
    salary: number;
}
interface Employee extends Person, Address {
    position: string;
    department: string;
}

interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak() {
    console.log("Woof!");
  }
}

// -->> 
interface Payment {
  amount: number;
}

interface OnlinePayment extends Payment {
  gateway: string;
}

class StripePayment implements OnlinePayment {
  amount: number;
  gateway: string;

  constructor(amount: number) {
    this.amount = amount;
    this.gateway = "Stripe";
  }
}
