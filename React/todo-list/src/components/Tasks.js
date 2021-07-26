import React from 'react';

const Tasks = (props) => {

    const taskClasses = []

        if (props.tasks.complete) {
        taskClasses.push("line-through")
    }

    return (
    <div>
        <span className={taskClasses.join(" ")}>{props.tasks.text}</span>
        <input onChange={(e) => {
            props.handleCheckBox(props.index);
        }} checked={props.tasks.complete} type="checkbox" style={{marginLeft: "5px"}} />
        <button onClick={(e) => {
            props.handleDeleteTask(props.index);
        }} style={{marginLeft: "35px" }}>Delete</button>            
    </div>
    )
}

export default Tasks;