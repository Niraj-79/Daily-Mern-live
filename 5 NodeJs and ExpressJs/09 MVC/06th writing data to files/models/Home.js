const fs = require("fs");
const path = require("path");
const rootDir = require("./../util/path-util");

const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    registeredHomes.push(this);
    const homeFilePath = path.join(rootDir, "data", "home.json");
    fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), (error) => {
      if (error) {
        console.log("Error While writing data", error);
      }
    });
  }

  static fetchAll() {
    return registeredHomes;
  }
};

exports.registeredHomes = registeredHomes;
