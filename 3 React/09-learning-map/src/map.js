const todoItems = [
  { id: 1, todoText: "Buy Milk", todoDate: "4-sep-2024" },
  { id: 2, todoText: "Go to college", todoDate: "Weekday" },
  { id: 3, todoText: "Go to Gym", todoDate: "Everyday" },
];

// function convertObjectToTodoText(todoItem) {
//   console.log(
//     `Convert function was called with item ${JSON.stringify(
//       todoItem
//     )}, converting this to ${todoItem.todoText}`
//   );
//   return todoItem.todoText;
// }

// console.log(" ========= Starting ===============")
// const todoItemsText = [];
// todoItems.forEach(item => {
//   const str = convertObjectToTodoText(item);
//   console.log(str);
//   todoItemsText.push(str);
// })
// console.log(todoItemsText);
// console.log(" ========= Ending ===============")

// console.log(" ========= Starting Using Map ===============");
// const todoItemsText = todoItems.map(convertObjectToTodoText);
// console.log(todoItemsText);
// console.log(" ========= Ending ===============");

console.log(" ========= Starting Using Map ===============");
const todoItemsText = todoItems.map((todoItem) => todoItem.todoText);
console.log(todoItemsText);
console.log(" ========= Ending ===============");

//todoItems.map();
