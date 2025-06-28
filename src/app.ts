abstract class Person{
  printDetails(): void {
    console.log("Person details are not defined in the abstract class.");
  }
  abstract PayTax(): void;
  abstract PayBiils(): void;
  abstract PayBiilsV2(): void;
}
class Teacher extends Person{
  private salary: number;

  constructor(salary: number) {
    super();
    this.salary = salary;
  }
  PayTax(): void {
    const tax = this.salary * 0.1; // Assuming a 10% tax rate
    console.log(`Teacher pays tax: $${tax}`);
  }
  PayBiils(): void {
    
  }
}

const teacher_data  = new Teacher(5000);
teacher_data.printDetails(); // Person details are not defined in the abstract class.