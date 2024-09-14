let product = {
  company: "Mango",
  itemName: "Cotton striped t-shirt",
  price: 861,
};
// Destructuring
let company = product.company;
// is same as
let { saneCompany } = product;




// Property shorthand
console.log("Property Shorthand");
let price = 861;
let productOne = {
  company: "Mango",
  itemName: "Cotton striped t-shirt",
  price: price,
};
let productTwo = {
  company: "Mango",
  itemName: "Cotton striped t-shirt",
  price,
};



// Method shorthand
console.log("Method Shorthand");
let productThree = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  displayPrice: function() {
    return `$${this.price.toFixed(2)}`;
  }
};
// is same as
let productFour = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  displayPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}



// Example
console.log(`Example`)
let student = {
  firstName: "Raju",
  lastName: "Kumar",
  age: 20,
  address: {
    houseNo: 10,
    road: "MG Road",
    city: "Bangalore",
    state: "Karnatak",
  },
  subjects: ["Math", "Science", "English"],
  feesPaid: true,
};

function printName(argStudent) {
  // let firstName = argStudent.firstName;
  // let lastName = argStudent.lastName;
  let { firstName, lastName, address } = argStudent;
  let { houseNo } = address;

  console.log("Name:", firstName, lastName);
  let result = { firstName: firstName, lastName: lastName };

  return result;
}
printName(student);
