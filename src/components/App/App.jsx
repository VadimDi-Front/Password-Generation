import React, {useContext, useState} from "react";
import { useEffect } from 'react';
import "./App.css";
import CreateToDo from "../Range.jsx";
import { ThemeContext } from "./ThemeContext.jsx";


    function App() {
        const [input, setInput] = useState("");
        const [counter, setCounter] = useState(0);

        const [tasks, setTasks] = useState(() => {
            const saved = localStorage.getItem('tasks');
            return saved ? JSON.parse(saved) : [];
        });

        useEffect(() => {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks]);


        const { theme, toggleTheme } = useContext(ThemeContext);



        const [filter, setFilter] = useState('all');

            const addTask = () => {
                if (input.trim() === '') return;

                const newTask = {
                    id: Date.now(),
                    text: input,
                    completed: false,
                };
                console.log(newTask);
                setTasks([...tasks, newTask]); // создаём новый массив с новой задачей
                setInput(''); // очищаем поле ввода
            };

        const toggleComplete = (id) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                )
            );
        };


        const filterTasks =  tasks.filter(task => {
                if (filter === 'completed') return task.completed;
                if (filter === 'incompleted') return !task.completed;
                return true;
            });

            const deleteTask = () => {
                setTasks(prevTasks => prevTasks.filter(task => !task.completed));
            }


        return (
            <div className={`body ${theme}`}> {/* ← добавь класс с темой */}


            <div className="app-wrapper">
                <h2>T O D O</h2>

                <div className="text-password">
                    <CreateToDo
                        input={input}
                        setInput={setInput}
                    addTask={addTask}
                    />


                </div>
                    <div className="`card-password ${theme}`">
                            <ul style={{ listStyleType: 'none'}}>
                                {filterTasks.map((task) => (
                                    <li key={task.id} className="element-list" style={{ marginBottom: '8px' }}>

                                        <label  className="text-task" style= {{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                            <input
                                                className="input-list round-checkbox"
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => toggleComplete(task.id)}
                                            />
                                            <span
                                                style={{
                                                    textDecoration: task.completed ? 'line-through' : 'none',
                                                }}
                                            >
                                          {task.text}
                                        </span>
                                        </label>
                                        <hr className="line" />
                                    </li>
                                ))}
                            </ul>

                        <div className="menu-btn">
                                <button onClick={()=> setFilter('all')} className="menu-btn-style">All</button>
                                <button onClick={()=> setFilter('completed')} className="menu-btn-style">Ready</button>
                                <button onClick={()=> setFilter('incompleted')} className="menu-btn-style">NotReady</button>
                                <button onClick={deleteTask} className="menu-btn-style">Clean</button>
                            <button onClick={()=> setCounter (prev => prev+1)} className="menu-btn-style">{counter}</button>
                            <button onClick={toggleTheme} className="menu-btn-style">Смена Темы</button>

                        </div>
                    </div>
                </div>
            </div>


        );
    }

export default App;
