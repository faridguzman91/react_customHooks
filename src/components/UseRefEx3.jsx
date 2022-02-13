import React from "react";
import Todo from "./Todo";
import { useState } from "react";

function UseRefEx3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo);
        }}
      >
        Toggle todo
      </button>
    </div>
  );
}

export default UseRefEx3;
