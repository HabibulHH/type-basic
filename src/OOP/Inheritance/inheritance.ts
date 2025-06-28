

// class Person{
//  protected name:string;
//  protected age: number; 
//  protected id:string;
//  // 20 
//   constructor(name:string,id:string, age:number){
//     console.log("parent constructor called also");
    
//    this.name = name;
//    this.age = age; 
//    this.id = id;
//   }

 

//   printDetails(): void {
//     console.log("Person Details: from parent class");
//     console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`);
//   }
// }


// class Teacher extends Person{
//    salary: number;
//   constructor(name:string,salary:number,id:string, age:number){
//     console.log("child constructor called also");
//     super(name,id,age ); // parent consturtor call hobe 
//     this.salary = salary;
    
//   }

//   printSalary(): void { 
//     console.log(`Salary: ${this.salary}`);
//   }
//   printDetails(): void {
//     console.log("Teacher Details: from child class");
//     console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id} , Salary: ${this.salary}`);
//   }
  
// }

// // class Student extends Person{
// //   grade: string;
// //   constructor(name:string,id:string, age:number, grade:string){
// //     console.log("child constructor called also");
// //     super(name,id,age ); // parent consturtor call hobe 
// //     this.grade = grade;
// //   }
// //   printGrade(): void {
// //     console.log(`Grade: ${this.grade}`);
// //   }
// // }

// const teacher_data = new Teacher("hira",344,"233HS",34);
// teacher_data.printDetails(); // Name: hira, Age: 34, ID: 233HS, Salary: 344
// //const student_data = new Student("hasan","233HS",20,"A+");


