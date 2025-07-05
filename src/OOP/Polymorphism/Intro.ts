
interface Student {
  student_name: string;
  age: number;
  courses: string[];
  amount: number;
}

function processPayment(student: Student): void {
    console.log(`Processing payment for ${student.student_name} of amount $${student.amount}`);
}

// ---> 

const student1: Student = {
    student_name: "John Doe",   
    age: 20,
    courses: ["Math", "Science"],
    amount: 500
};


processPayment(student1);



interface Printable {
    printDetails(): void;
    log(): void;
}

class PdfPinter implements Printable {
    printDetails(): void {
        console.log("This is a printable object.");
    }
    log(): void {
        console.log("Logging details of the printable object.");
    }
}

class ImagePrinter implements Printable {
    printDetails(): void {
        console.log("This is an image printer object.");
    }
    log(): void {
        console.log("Logging details of the image printer object.");
    }
}


// polymorphic function
function printObjectDetails(obj: Printable): void {
    obj.printDetails();
    obj.log();
}

printObjectDetails(new PdfPinter());
printObjectDetails(new ImagePrinter());