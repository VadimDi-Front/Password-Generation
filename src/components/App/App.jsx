import React, { useState } from "react";
import "./App.css";
import PasswordSlider from "../Range.jsx";
// import { Checkbox } from "../Checkbox";

function App() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(12);

    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const [level, setLevel] = useState(0);

    const generatePassword = () => {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+=-{}[]<>?/";

        let chars = "";
        let newlevel=0;
        if (includeUppercase){
            chars += uppercase;
            newlevel++;
        }

        if (includeLowercase) {
            chars += lowercase;
            newlevel++;
        } ;
        if (includeNumbers) {
            chars += numbers;
            newlevel++;
        }
        if (includeSymbols) {
            chars += symbols;
            newlevel++;
        }
        if(passwordLength>16){
            newlevel++;
        }
        if(passwordLength>22){
            newlevel++;
        }

        console.log("UPPERCASE:", includeUppercase);
        console.log("LOWERCASE:", includeLowercase);
        console.log("NUMBERS:", includeNumbers);
        console.log("SYMBOLS:", includeSymbols);
        console.log("Level", newlevel);


        if (!chars) {
            alert("Выберите хотя бы один тип символов!");
            return;
        }

        let result = "";
        for (let i = 0; i < passwordLength; i++) {
            const rand = Math.floor(Math.random() * chars.length);
            result += chars[rand];
        }

        setPassword(result);
        setLevel(newlevel);
    };

    return (
        <div className="app-wrapper">
            <h2>Password Generator</h2>

            <div className="text-password">
                <h3 className="h3">{password}</h3>
                <button className="button-copy" onClick={() => navigator.clipboard.writeText(password)}>
                    Copy
                </button>
            </div>
                <div className="card-password">
                    <PasswordSlider
                        passwordLength={passwordLength}
                        onChangeLength={setPasswordLength}
                    />

                    <div className="checkboxes" >
                        <label>
                            <input
                                type="checkbox" className="choice"
                                checked={includeUppercase}
                                onChange={() => setIncludeUppercase(prev => !prev)}
                            />
                            Include Uppercase Letters
                        </label>

                        <label>
                            <input
                                type="checkbox" className="choice"
                                checked={includeLowercase}
                                onChange={() => setIncludeLowercase(prev => !prev)}
                            />
                            Include LowerCase Letters
                        </label>

                        <label>
                            <input
                                type="checkbox" className="choice"
                                checked={includeNumbers}
                                onChange={() => setIncludeNumbers(prev => !prev)}
                            />
                            Include Numbers
                        </label>
                        <label>
                            <input
                                type="checkbox" className="choice"
                                checked={includeSymbols}
                                onChange={() => setIncludeSymbols(prev => !prev)}
                            />
                            Include Symbols
                        </label>

                    </div>
                    <div className="level">
                        <h3>Сложность пароля: {level}/6</h3>
                    </div>
                    <button className="button-generation" onClick={generatePassword}>
                        GENERATE =>
                    </button>
                </div>
        </div>
    );
}

export default App;
