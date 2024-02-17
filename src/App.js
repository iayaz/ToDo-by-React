// App.js
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ToDoCard from "./components/ToDoCard";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const updateText = (e) => {
    setText(e.target.value);
  };

  const addTasks = () => {
    if (text.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, text]);
      setText("");
    }
  };

  const deleteTasks = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <input
            type="text"
            style={{ marginBottom: "10px", marginRight: "5px" }}
            value={text}
            onChange={updateText}
          />
          <button onClick={addTasks}> Add tasks </button>
        </div>
        {tasks.map((value, index) => {
          return (
            <ToDoCard
              key={index}
              list={value}
              onDelete={() => deleteTasks(index)}
              onEdit={(newText) => editTask(index, newText)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
