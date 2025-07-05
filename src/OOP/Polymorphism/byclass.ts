class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

// common func for polymorphism
function talkToAnimal(animal: Animal) {
  animal.speak();
}

const dog = new Dog();
const cat = new Cat();

talkToAnimal(dog); // Output: Dog barks.
talkToAnimal(cat); // Output: Cat meows.