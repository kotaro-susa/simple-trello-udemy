import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputValue, setInputValue] = useState("Today");
  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={inputValue}
            maxLength="15"
          />
        </form>
      ) : (
        <h3>{inputValue}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
