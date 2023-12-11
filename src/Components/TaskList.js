import React, { useState } from "react";
import Task from "../Components/Task";
import { useTaskContext } from "../Context";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title: newTaskTitle, completed: false },
      });
      setNewTaskTitle("");
    }
  };

  return (
    <div className="container col-10 col-sm-10 mx-auto">
      <h2 className="text-center text-danger">Task List</h2>
      <div className="inputfield">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="w-50"
        />
        <button onClick={handleAddTask} className="btn btn-success ms-3">
          Add Task
        </button>
      </div>
      <div className="task-list">
        {state.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
