import React from "react";
import "./todoapp.css";


function Button(props){

	const execute = (e) => {
		e.preventDefault();
		props.function(props.args);
	};

	return (
    	<button className={props.btnType} onClick={execute}>{props.children}</button>
	);
}

export default Button;