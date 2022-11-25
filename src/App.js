import { React, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //! Data
  const [showAddtask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctors Appointment",
      day: "21st - june-2022",
      reminder: true,
    },
    {
      id: "2",
      text: "Buying Food stuffs",
      day: "21st - june-2022",
      reminder: true,
    },
    {
      id: "3",
      text: "Metting with Boss",
      day: "21st - june-2022",
      reminder: false,
    },
  ]);
  // ? Submit Func
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newtask = { id, ...task };
    setTasks([...tasks, newtask]);
  };

  // ? Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // ? Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header  onAdd={()=> setShowAddTask(!showAddtask)} show={showAddtask}/>
      {showAddtask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "Add Task"
      )}
    </div>
  );
}

export default App;
