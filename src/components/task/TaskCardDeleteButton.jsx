import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const TaskCardDeleteButton = ({ setTaskCardsList, taskCardsList,taskCard}) => {
  const TaskDelete = () => {
    const NewTaskList=taskCardsList.filter((element) => element.id !== taskCard.id);
    setTaskCardsList(NewTaskList);
  };
  return (
    <div>
      <button className="taskCardDeleteButton" onClick={TaskDelete}>
        <FontAwesomeIcon icon={faCircleXmark} className="faCircleXmark" />
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
