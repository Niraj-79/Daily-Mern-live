const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://Niraj079:Niraj@2003@airbnb.gmw0o.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb";

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
