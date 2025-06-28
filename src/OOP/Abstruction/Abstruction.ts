abstract class Shape {
  abstract area(): number // signature line no implementation
  displayarea(): void {
    console.log("Area of the shape is: " + this.area());
  }
}

class Circle extends Shape {

  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}


class Rectangle extends Shape{
  constructor(private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

// let circle = new Circle(12);
// circle.displayarea();

