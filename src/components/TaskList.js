import React from "react";
import Task from './Task';

const TaskList = (props) => {

  return (
    <div className="taskList"> 
      
          {props.tasks.map( task  =>
             <Task id={task.id} taskText={task.content} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={props.style}/> 
          )}   
             
    </div>
  )
};

export default TaskList;