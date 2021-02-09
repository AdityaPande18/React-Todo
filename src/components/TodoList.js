import React from "react";
import "./todoapp.css";
import Button from './Button';


function TodoApp({ tasklist, taskCompleted, deletetask }) {

  return (
    <div className="todo">           
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((task) => (
            <li key={task.id} className={task.isCompleted ? "crossText" : "listitem"}>
              {task.value}

              <Button btnType="completed" function={taskCompleted} args={task.id}>Completed</Button>
              
              <Button btnType="delete" function={deletetask} args={task.id} >Delete</Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
