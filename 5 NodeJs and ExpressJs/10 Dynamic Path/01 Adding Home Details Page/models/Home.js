const fs = require("fs");
const path = require("path");
const rootDir = require("./../util/path-util");
const homeFilePath = path.join(rootDir, "data", "home.json");

const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback) {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }
};

exports.registeredHomes = registeredHomes;
