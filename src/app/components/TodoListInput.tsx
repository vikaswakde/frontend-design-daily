import { setMaxListeners } from "events";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const TodoListInput = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput('')
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="add your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
    </>
  );
};

export default TodoListInput;
