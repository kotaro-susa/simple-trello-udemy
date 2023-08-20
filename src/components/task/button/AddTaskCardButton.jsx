import React from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    setTaskCardsList([...taskCardsList,{
      id:uuidv4(),
      draggableId:`item${uuidv4()}`,
    }])
  };
  return (
    <div className="AddTaskCardButtonAreas">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        ＋
      </button>
    </div>
  );
};

export default AddTaskCardButton;
