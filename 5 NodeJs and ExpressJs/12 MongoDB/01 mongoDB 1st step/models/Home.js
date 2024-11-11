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

  save() {}

  static fetchAll() {
    return airbnbDb.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return airbnbDb.execute("SELECT * FROM homes WHERE id=?", [homeId]);
  }

  static deleteById(homeId) {
    return airbnbDb.execute("DELETE FROM homes WHERE id=?", [homeId]);
  }
};
