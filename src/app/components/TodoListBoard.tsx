import React from "react";

const TodoListBoard = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };
  return (
    <>
      <div>
        <p>{task}</p>
        <button className="bg-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoListBoard;
