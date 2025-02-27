import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems></TodoItems>
    </center>
  );
}

export default App;
