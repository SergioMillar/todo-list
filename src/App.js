import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskLeft from './components/TaskLeft';

const App = () => {
  const [ tasks, setTasks ] = useState([])
  const [ newTask, setNewTask ] = useState([])
  const [ style, setStyle ] = useState({display: 'none'});
  
  const addTask = (event) => {
    event.preventDefault()
    const taskObj = {
      id: tasks.length + 1,
      content: newTask
    }
    setTasks(tasks.concat(taskObj))
    setNewTask('')
    }
    // const deleteTask = (id) => {
    //   setTasks(tasks.filter(note => note.id !== id))
    // }
    
    const handleTaskChange = (event) => {
      setNewTask(event.target.value)
    }
  
    const handleHoverOn = e => {
      setStyle({display: 'block'});
    }
    const handleHoverOff = e => {
      setStyle({display: 'none'})
    }
  
    return (
      <div className="App">
        <div className="container">
          <h1>TODOS</h1>
          <div className="main-card">
            <TaskForm onSubmit={addTask} 
                    taskValue={newTask} taskChange={handleTaskChange}/>  
            <TaskList tasks={tasks} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} style={style}/> 
            <TaskLeft tasks={tasks}/> 
          </div>
        </div>
      </div>
    )
  }
  
  export default App;
