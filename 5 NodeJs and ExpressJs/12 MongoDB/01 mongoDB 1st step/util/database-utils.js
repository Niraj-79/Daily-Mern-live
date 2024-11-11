const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://root:root@airbnb.xqq4y.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log(client);
      callback(client);
    })
    .catch((error) => {
      console.log("Error came while  connecting to mongoDB", error);
    });
};

module.exports = mongoConnect;
