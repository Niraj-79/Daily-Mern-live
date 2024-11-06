const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path-util");
const homeFilePath = path.join(rootDir, "data", "home.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback) {
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        // Edit case
        registeredHomes = registeredHomes.map((home) =>
          home.id !== this.id ? home : this
        );
      } else {
        // New case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
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

  static findById(homeId, callback) {
    Home.fetchAll((homes) => {
      const home = homes.find((home) => home.id === homeId);
      callback(home);
    });
  }
  //// first method
  // static deleteById(homeId, callback) {
  //   Home.fetchAll((homes) => {
  //     const newHomes = homes.filter((home) => {
  //       if (home.id !== home) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   });
  // }

  //// second method
  // static deleteById(homeId, callback) {
  //   Home.fetchAll((homes) => {
  //     const newHomes = homes.filter((home) => {
  //       return home.id !== homeId;
  //     });
  //   });
  // }

  //// Third method
  static deleteById(homeId, callback) {
    Home.fetchAll((homes) => {
      const newHomes = homes.filter((home) => home.id !== homeId);
      fs.writeFile(homeFilePath, JSON.stringify(newHomes), callback);
    });
  }
};
