import React, { useState } from "react";
import "../styles/range.css";


const CreateToDo = ({ input, setInput,addTask }) => {
    return (
        <div className="{`root ${theme} `}">

            <input
                type="text"
                className="{`root ${theme} `}"
                id="passwordLength"

                placeholder="Create a new To Do"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask();
                    }
                }}
             />

        </div>
    );
};

export default CreateToDo;
