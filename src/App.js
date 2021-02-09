import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {v4 as uuid} from 'uuid';


function App() {
	const [task, setTask] = useState("");
  	const [tasklist, setTaskList] = useState([]);


  	useEffect(()=>{
    	const storageTasks = JSON.parse(localStorage.getItem('Previous-Tasks'));
	    if(storageTasks!==null){
      		setTaskList(storageTasks);
	    }
  	}, [])

  	useEffect(()=>{
    	localStorage.setItem('Previous-Tasks', JSON.stringify(tasklist));
  	}, [tasklist]);


  	const handleChange = (e) => {
    	setTask(e.target.value);
  	};

  	const AddTask = () => {
    	if (task !== "") {
	      	const taskDetails = {
				id: uuid(),
				value: task,
				isCompleted: false,
	      	};
	      	setTaskList([...tasklist, taskDetails]);
	    }

	    setTask("");
  	};

  	const deletetask = (id) => {    
	    setTaskList(tasklist.filter((t) => t.id !== id));
  	};

  	const taskCompleted = (id) => {

	    const element = tasklist.findIndex((elem) => elem.id === id);

	    const newTaskList = [...tasklist];

	    newTaskList[element] = {
	      	...newTaskList[element],
	      	isCompleted: true,
	    };
	    setTaskList(newTaskList);
  	};

  	return (
    	<div className="App">
	      	<span className="title">Todo List</span> <br />
	      	<TodoForm AddTask={AddTask} handleChange={handleChange} task={task} />
	      	<br />
	      	<TodoList tasklist={tasklist} taskCompleted={taskCompleted} deletetask={deletetask} />
    	</div>
  	);
}

export default App;
