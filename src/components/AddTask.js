import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onsubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add text");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className='add-form'
      onSubmit={onsubmit}>
      <div className='form-control'>
        <h3>Task</h3>
        <input
        value={text}
          type='text'
          placeholder='Add Task'
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <h3>Day & Time</h3>
        <input
        value={day}
          type='text'
          placeholder='Set Day & Time'
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control-check'>
        <h3>Reminder</h3>
        <input
        value={reminder}
          type='checkbox'
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input
        type='submit'
        value='Save Task'
        className='btn btn-block'
      />
    </form>
  );
};

export default AddTask;
