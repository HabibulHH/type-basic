// class Person {
//   name: string;
//   age: number;

//   // Overload signatures
//   constructor();
//   constructor(age: number);
//   constructor(name: string);
//   constructor(age: number, name: string);
//   constructor(name: string, age: number);

//   // Implementation
//   constructor(
//     param1?: number | string,
//     param2?: number | string
//   ) {
//     // Default values
//     this.name = "";
//     this.age = 0;

//     if (typeof param1 === "string" && typeof param2 === "number") {
//       // constructor(name, age)
//       this.name = param1;
//       this.age = param2;
//     } else if (typeof param1 === "number" && typeof param2 === "string") {
//       // constructor(age, name)
//       this.age = param1;
//       this.name = param2;
//     } else if (typeof param1 === "number") {
//       // constructor(age)
//       this.age = param1;
//     } else if (typeof param1 === "string") {
//       // constructor(name)
//       this.name = param1;
//     }
//     // else default values stay
//   }

//   printDetails() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// // Usage examples:
// const p = new Person();
// p.printDetails(); // Name: , Age: 0

// const p1 = new Person("Hira Hasan");
// p1.printDetails(); // Name: Hira Hasan, Age: 0

// const p2 = new Person(25);
// p2.printDetails(); // Name: , Age: 25

// const p3 = new Person(30, "Ali");
// p3.printDetails(); // Name: Ali, Age: 30

// const p4 = new Person("Sara", 28);
// p4.printDetails(); // Name: Sara, Age: 28
