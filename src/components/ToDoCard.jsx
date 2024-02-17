// ToDoCard.js
import React, { useState } from "react";

const ToDoCard = ({ list, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(list);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
      {isEditing ? (
        <>
          <input value={editedText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h5 style={{ margin: "5px" }}>{list}</h5>
          <button style={{ margin: "5px" }} className="border border-danger" onClick={handleEdit}>
            e
          </button>
          <button style={{ margin: "5px" }} className="border border-danger" onClick={onDelete}>
            x
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoCard;
