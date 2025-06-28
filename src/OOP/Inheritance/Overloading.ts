class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
 
  add(a:number|string , b:number|string):number | string{
    if(typeof a ==="number"  && typeof b == "number"){
      return a+b;
    }else if (typeof a === "string" && typeof b === "string") {
      return a + b;
    }
    else {
      throw new Error("Invalid parameters. Both arguments must be numbers or strings.");
    }
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20));            // 30
console.log(calc.add("Hello, ", "TS!"));  // Hello, TS!