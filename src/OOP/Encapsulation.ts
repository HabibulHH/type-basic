// Keeping data (state) and methods (behavior) bundled inside a class.
// Encapsulation
// Protects internal state by restricting direct access.
// Achieved using access modifiers: private, protected, public.

class Student {
  //university:string = "AIUB";
  private amount: number;
  private name: string;
  id?:number

  constructor(amount_data: number, name_data: string) {
    this.name = name_data;
    this.amount = amount_data;
  }

  addMoney(amount:number):boolean {
    this.amount = this.amount + amount;
    return true;
  }
  printDetails(): void {
    console.log("[INFO] Name:", this.name);
    console.log("[INFO] Total Amount:", this.amount);
  }
}
//---------------------------
let hira = new Student(23,"hira hasan")
hira.addMoney(34);
hira.addMoney(334);
hira.addMoney(3434);
hira.addMoney(3434);
hira.addMoney(3434);
hira.printDetails();
hira.id=12;
