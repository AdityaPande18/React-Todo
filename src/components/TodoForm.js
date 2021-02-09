import React from "react";
import "./todoapp.css";
import Button from './Button';


function TodoForm({AddTask, handleChange, task}) {

  return (
    <div className="todo">
      <input type="text" name="text" id="text" value={task} 
        onChange={(e) => handleChange(e)} placeholder="Add task here..."
      />

      <Button btnType="add-btn" function={AddTask} > Add</Button>            
    </div>
  );
}

export default TodoForm;
