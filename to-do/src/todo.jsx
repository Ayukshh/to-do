import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([{ id: 1, text: '', isChecked: false }]);

    function handleChange(e, id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, text: e.target.value } : task
            )
        );
    }

    function handleCheckboxChange(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }

    function handleRemoveTask(id) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
                                                             //we can also do something like
    function handleDuplicate() {                             //const[newTask, setNewTask]=usestate("")
        setTasks((prevTasks) => [                            // function addTask(){
            ...prevTasks,                                    // setTask(task=>[...task, newTask]);
            { id: Date.now(), text: '', isChecked: false }   //setNewTask("")
        ]);
    }

    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} style={{ marginBottom: "10px" }}>
                    <input
                        type="checkbox"
                        checked={task.isChecked}
                        onChange={() => handleCheckboxChange(task.id)}
                    />
                    <input
                        value={task.text}
                        onChange={(e) => handleChange(e, task.id)}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            color: task.isChecked ? "gray" : "white"
                        }}
                    />
                    <button onClick={() => handleRemoveTask(task.id)}>delete</button>
                </div>
            ))}
            <button onClick={handleDuplicate}>Add Tasks</button>
        </>
    );
}

export default Todo;
