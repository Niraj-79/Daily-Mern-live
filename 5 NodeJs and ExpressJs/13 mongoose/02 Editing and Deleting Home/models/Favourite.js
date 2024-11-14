const { ObjectId } = require("mongodb");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb();
    return db.collection('favourites').findOne({homeId: this.homeId}).then(existingFav => {
      if (!existingFav) {
        console.log("Adding to favorites")
        return db.collection('favourites').insertOne(this);
      }
      console.log('Already marked favourite')
      return Promise.resolve();
    })
  }

  static find() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId });
  }
};
