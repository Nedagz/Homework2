import React ,{ useState } from "react";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  
    
  const addToList = (newItem) => {
    setTodoList([newItem, ...todoList]);
  };
  return (
    <div className="w-[300px]">
       
        <h2 className="text-xl font-semibold mb-2">Todo List</h2>
        <TodoForm handleAddItem={addToList} />
        <TodoList list={todoList} />

    </div>
  );
};

export default TodoApp;
