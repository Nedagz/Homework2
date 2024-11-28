import React, { useState } from "react";
import TodoApp from "./components/todo-app";
import Toggle from "./context/theme-provider";
import "./assets/style/style.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="box-border m-0 p-0 flex flex-col justify-center items-center  w-[500px] h-screen" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}/>
        <TodoApp />
     
    </div>
  );
}

export default App;
