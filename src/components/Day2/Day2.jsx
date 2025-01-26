import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import './Day2.css';
//import image1 from "../../assets/image1.jpg";

const Day2 = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container" style={{ backgroundColor: `black` }}>
      <Header title="To-Do" tagline="In need of Orderly tasks !" />
      <main className="main-content">
        <TaskList tasks={tasks} onAddTask={addTask} />
      </main>
    </div>
  );
};

export default Day2;