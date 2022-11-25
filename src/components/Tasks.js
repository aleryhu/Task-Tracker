import { clear } from "@testing-library/user-event/dist/clear";
import { React, Fragment } from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <Fragment>
      {tasks.map((task) => (
      <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </Fragment>
  );
};

export default Tasks;
