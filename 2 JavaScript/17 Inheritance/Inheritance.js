console.log("Class (Inheritance)");

// // Define a class that extends another class
// class Dog extends Animal{
//   constructor(name, breed) {
//     super(name); // Call the parent class constructor
//     this.breed = breed;
//   }

//   // Method overriding
//   speak() {
//     console.log(`${this.name}, the ${this.breed}, barks.`);
//   }
// }

// // Create an instance of the subclass
// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.speak(); // Output: "Buddy, the Golden Retriever, barks."



// Example
class Cat {
  constructor(name) {
    this.name = name;
    this.legs = 4;
  }

  move() {
    console.log(`This cat is moving on ${this.legs}legs.`);
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let smriti = new Cat("Smriti");
smriti.move();
smriti.speak();

class Lion extends Cat {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  eat() {
    console.log(`${this.name} eats meat.`);
  }

  speak() {
    console.log(`${this.name} roars.`);
  }
}

let simba = new Lion("Simba");
simba.move();
simba.speak();
simba.eat();

//smriti.eat();
