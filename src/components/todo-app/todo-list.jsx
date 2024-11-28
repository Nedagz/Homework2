// import { useState } from "react";
import { useState } from "react";
import Button from "./button";

const TodoList = ({ list }) => {
  const [tasks, setTasks] = useState([...list]);
 

  const handleRemoveItem = (input) => {
    const updatedList = tasks.filter((index) => index !== input);
    setTasks(updatedList);
  };

  return (
    <ul className="space-y-2 overflow-y-auto max-h-[200px]">
      {list.map((item, index) => (
        <li
          key={index}
          className="flex w-full rounded justify-between items-center"
        >
          <span>{item}</span>
          <div className="flex gap-2">
            <Button type={"submit"} title={"Edit"} />
            <Button
              type={"submit"}
              title={"Remove"}
              onClick={() => {
                handleRemoveItem(index);
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
