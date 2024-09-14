console.log("this Keyword (Constructor Function)");

function Person(name) {
  this.name = name;
}
const person = new Person("KGCoding");
console.log(person.name); // Output: KGCoding
