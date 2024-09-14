console.log("this Keyword (Arrow Functions)");

const obj = {
  name: "KGCoding",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // OUtput: undefined (inherited from global context)
