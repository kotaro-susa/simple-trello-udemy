import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, setTaskList, taskList,index }) => {
  const handleDelete = () => {
    setTaskList(taskList.filter((item) => item.id !== task.id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button className="taskTrashButton" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} className="fas fa-trash-alt" />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
