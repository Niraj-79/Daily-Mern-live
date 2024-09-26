console.log("Learning Objects");

// Example 1
console.log("Example 1");
let company = "Nike";
let itemName = "Running Shoes";
let price = "2500";
let avgRating = 4.5;
let numberOfRatings = 38;
console.log(company);



// Example 2
console.log("Example 2");
let product = {
  company: "Nike",
  itemName: "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
console.log(product);
console.log(typeof product);



// Example 3
console.log("Example 3");
product = {
  company: "Nike",
  itemName: "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
console.log("dot notation:", product.company);
console.log("bracket notation:", product["company"]);
// variable thrue define
let com = "company";
console.log("variable define", product[com]);

let key = "avgRating";
console.log("variable define", product[key]);



// Example 4
console.log("Example 4");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
console.log("characters productdefine:", product["item-Name"]);



// Example 5 Modifying the object
console.log("Example 5 Modifying the object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
product.discount = "50%";
console.log(product);
product.netPrice = 1250;
console.log(product);



// Example 6 Modifying the object
console.log("Example 6 Modifying the object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
product.price = 50;
console.log("After Item value change:", product);



// Example 7 Modifying the object
console.log("Example 7 Modifying the object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
};
delete product.numberOfRatings;
console.log("After delete", product);



// Example 8 Inside Object
console.log("Example 8 Inside object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
  rating: {
    fiveStar: 10,
    fourStar: 5,
    threeStar: 3,
    twoStar: 12,
    oneStar: 8,
  },
};
console.log("All Value called: ", product);
console.log("Only All rating valued called:", product.rating);
console.log("Only Single rating valued called:", product.rating.fiveStar);



// Example 9 Inside Object
console.log("Example 9 Inside object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
  rating: {
    fiveStar: 10,
    fourStar: 5,
    threeStar: 3,
    twoStar: 12,
    oneStar: 8,
  },
};
function showRating(rating) {
  let totalRating = rating.fiveStar + rating.fourStar+ rating.threeStar+ rating.twoStar+ rating.oneStar;
  
  let avgRating = (5 * rating.fiveStar + 4 * rating.fourStar+ 3 * rating.threeStar+ 2 * rating.twoStar+ 1 * rating.oneStar) / totalRating;
  console.log('Total Ratings:', totalRating);
  console.log('Average Rating:', avgRating);
};
showRating(product.rating);



// Example 10 Inside Object
console.log("Example 10 Inside object");
product = {
  company: "Nike",
  "item-Name": "Running shoes",
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
  rating: {
    fiveStar: 10,
    fourStar: 5,
    threeStar: 3,
    twoStar: 12,
    oneStar: 8,
    showRating: function() {
      let totalRating = this.fiveStar + this.fourStar + this.threeStar + this.twoStar + this.oneStar;

      let averageRating = (5 * this.fiveStar + 4 * this.fourStar+ 3 * this.threeStar+ 2 * this.twoStar+ 1 * this.oneStar) / totalRating;
      console.log('Total Ratings:', totalRating);
      console.log('Average Rating:', averageRating);
    },
  },
};
showRating(product.rating);
product.rating.showRating();