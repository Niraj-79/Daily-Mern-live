console.log("Error Handling (Finally Block)");
try {
  console.log("Trying to execute");
  // Some code that may throw an error
} catch (error) {
  console.log("caught an error:", error.message);
} finally {
  console.log("This will always execute");
}



// Example
console.log("Example");
function jsonStringToJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.log("Error occured");
    return {};
  } finally {
    console.log("Finally");
  }
}
let newObj2 = jsonStringToJson('{"A":1}');
console.log("Obj2", newObj2);
