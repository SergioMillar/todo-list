import React from 'react'

const Task = (props) => {
    console.log(props)
    return(
      <div className="task" key={props.id}> 
        {props.taskText}
        <div className="close-button-div" style={{position: 'relative', top: -30 , left: -20, width: 370, height: 30, marginTop: 5}}
                onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={() => props.deleteTask(props.id)}>
         <button type="button" className="close-button" style={props.style} > X </button>
        </div>
      </div>
    )
}

export default Task