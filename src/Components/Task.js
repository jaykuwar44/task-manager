import React, { useState } from "react";
import { useTaskContext } from "../Context";

const Task = ({ task }) => {
  const { dispatch } = useTaskContext();
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, title: editedTitle },
    });
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      {editing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSaveEdit} className="btn btn-success">
            Save
          </button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={handleEdit} className="btn btn-warning">
            Edit
          </button>
        </>
      )}
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default Task;
