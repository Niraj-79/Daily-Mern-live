const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-utils");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb();
    return db.collection("favourites").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId });
  }
};
