import TodoItem from "./TodoItem";

const TodoItems = () => {
  const todoItems = [
    { id: 1, todoText: "Buy Milk", todoDate: "4-sep-2024" },
    { id: 2, todoText: "Go to college", todoDate: "Weekday" },
    { id: 3, todoText: "Go to Gym", todoDate: "Everyday" },
  ];
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoText={item.todoText}
          todoDate={item.todoDate}
        />
      ))}
    </>
  );
};

export default TodoItems;
