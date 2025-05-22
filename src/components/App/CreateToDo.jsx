import React, { useContext } from "react";
import "../../styles/range.css";
import { ThemeContext } from "../ThemeContext.jsx";

const CreateToDo = ({ input, setInput, addTask }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`root ${theme}`}>
      <input
        type="text"
        className={`root ${theme}`}
        id="passwordLength"
        placeholder="Create a new To Do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
    </div>
  );
};

export default CreateToDo;
