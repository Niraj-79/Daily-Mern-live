const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  photoUrl: String,
  description: String,
});

//// first method
  homeSchema.pre('findOneAndDelete', function(next) {
    const homeId = this.getQuery()["_id"];
    console.log(homeId);
    Favourite.deleteOne({homeId}).then(() => {
      console.log("Deleted Successfully");
      next();
    }).catch(err => {
      console.log("Error while deleting Favourite", err);
    })
  })



//// second method 
// homeSchema.pre("findOneAndDelete", async function (next) {
//   const Favourite = require("./Favourite");
//   const homeId = this.getQuery()["_id"];
//   // console.log(homeId);
//   try {
//     await Favourite.deleteOne({ homeId });
//     // console.log("Deleted Successfully");
//     next();
//   } catch (err) {
//     // console.log("Error while deleting Favourite", err);
//     next(err);
//   }
// });

module.exports = mongoose.model("Home", homeSchema);
