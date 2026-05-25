import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My List Of Things To Do.</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>+</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks yet ✨</p>
          ) : (
            tasks.map((item, index) => (
              <div className="task-card" key={index}>
                <p>{item}</p>

                <button onClick={() => deleteTask(index)}>
                 ✖️💣
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;