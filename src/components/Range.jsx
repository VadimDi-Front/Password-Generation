import React, { useState } from "react";
import "../styles/range.css";
const PasswordSlider = ({ passwordLength, onChangeLength }) => {
    return (
        <div className="slider-container">
            <label htmlFor="passwordLength" className="lengthLabel">
                Character Length <span className="colorPasswordLength">{passwordLength}</span>
            </label>
            <input
                type="range"
                id="passwordLength"
                min="4"
                max="32"
                value={passwordLength}
                onChange={(e) => onChangeLength(parseInt(e.target.value, 10))}
            />
        </div>
    );
};

export default PasswordSlider;
