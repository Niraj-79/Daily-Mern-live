const { getDb } = require("../util/database-utils");
const Favourite = require("./Favourite");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    const db = getDb();
    return db
      .collection("homes")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      });
  }

  // First way Detail method & Error handling and long
  // static fetchAll() {
  //   const db = getDb();
  //   return db.collection("homes").find().toArray()
  //     .then(registeredHomes => {
  //       console.log(registeredHomes);
  //       return registeredHomes;
  //     })
  //     .catch(error => {
  //       console.log("Error came while fetching homes: ", error);
  //     });
  // }

  // second way short method
  static fetchAll() {
    const db = getDb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {}

  static deleteById(homeId) {}
};
