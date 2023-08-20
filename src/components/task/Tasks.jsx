import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const Tasks = ({ taskList, setTaskList }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const remove = taskList.splice(result.source.index,1);
    taskList.splice(result.destination.index, 0, remove[0]);
    setTaskList(taskList);
    // console.log(remove);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task,index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
