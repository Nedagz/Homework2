import React, { useState } from "react";
import Button from "./button";

const TodoForm = ({handleAddItem}) => {
    const [inputValue, setInputValue] = useState("")
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddItem(inputValue)
        setInputValue("")
    }
    
  return (
    <form className="w-full flex gap-2 mb-4">
      <input
      value={inputValue}
        type="text"
        onChange={handleChangeInput}
        placeholder="Add new todo"
        className="border w-full border-gray-300 rounded p-2 bg-clip-contenft bg-clip-text focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Button onClick={handleSubmit} type={"submit"} title={"Add"} disabled = {inputValue === ""}/>
    </form>
  );
};

export default TodoForm;
