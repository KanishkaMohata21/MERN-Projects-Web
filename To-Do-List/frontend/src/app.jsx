import React, { useEffect, useState } from "react";
import "./styles.css";
import Tasks from "./components/tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get`)
      .then((res) => setTasks(res.data))
      .catch((e) => console.error(e));
  }, [updateUI]);

  const saveTask = () => {
    axios
      .post(`http://localhost:5000/api/save`, { task: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h2 className="title">K TO-DO-APP</h2>
      <div className="inpt_holder">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="inpt"
          placeholder="Add your Task"
        />
        <button className="btn" onClick={saveTask}>
          +
        </button>
      </div>
      {tasks.map((el) => (
        <Tasks
          key={el._id}
          text={el.task}
          id={el._id}
          setUpdateUI={setUpdateUI}
        />
      ))}
    </div>
  );
}

export default App;
