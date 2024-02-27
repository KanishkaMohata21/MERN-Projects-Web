import React, { useState } from "react";
import axios from "axios";
import { MdModeEditOutline, MdCheck, MdClose, MdDelete } from "react-icons/md";

function Tasks({ text, id, setUpdateUI }) {
  const [editMode, setEditMode] = useState(false);
  const [editedtext, setEditedText] = useState("");

  const handleEdit = () => {
    setEditedText(text);
    setEditMode(true);
  };

  const updateTask = () => {
    axios
      .put(`http://localhost:5000/api/update/${id}`, { task: editedtext })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setEditMode(false);
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const deleteTask = () => {
    axios
      .delete(`http://localhost:5000/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="tasks">
      {editMode ? (
        <>
          <input
            type="text"
            value={editedtext}
            onChange={(e) => setEditedText(e.target.value)}
            className="inpt"
          />
          <button onClick={updateTask} className="btn">
            <MdCheck />
          </button>
          <button onClick={handleCancel} className="btn">
            <MdClose />
          </button>
        </>
      ) : (
        <>
          <p>{text}</p>
          <div className="icons">
            <MdModeEditOutline onClick={handleEdit} />
            <MdDelete onClick={deleteTask} />
          </div>
        </>
      )}
    </div>
  );
}

export default Tasks;
