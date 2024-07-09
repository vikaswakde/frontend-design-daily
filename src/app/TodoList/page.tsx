"use client";
import React, { useState } from "react";
import TodoListBoard from "../components/TodoListBoard";
import TodoListInput from "../components/TodoListInput";

const Page = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1>Todo List Board</h1>
        <TodoListInput taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div>
        {taskList.map((task, index) => (
          <TodoListBoard
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
