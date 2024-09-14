console.log("this Keyword (Object Method)");

const obj = {
  name: "KGCoding",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // OUtput: KGCoding
