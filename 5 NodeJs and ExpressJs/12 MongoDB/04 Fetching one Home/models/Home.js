const { ObjectId } = require("mongodb");
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
  
  static fetchAll() {
    const db = getDb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next()
    
    // .then(home => {
    //   console.log(home);
    //   return home;
    // })
    // .catch (err => {
    //   console.log("Error came while doing findById", err)
    // })
  }

  static deleteById(homeId) {}
};
