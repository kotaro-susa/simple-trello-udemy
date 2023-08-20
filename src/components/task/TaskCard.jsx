import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./TaskCardDeleteButton";
import TaskAddInput from "./TaskAddInput";
import Tasks from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ setTaskCardsList, taskCardsList, taskCard, index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable index={index} draggableId={taskCard.draggableId}>
      {(provided) => (
        <div
          className="taskCard"
          key={taskCard.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndDeleButton"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
