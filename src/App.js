import React, {useState} from 'react';
import './App.css';

function App = () => {
  const [ tasks, setTasks ] = useState([])
  const [ newTask, setNewTask ] = useState([])
  
  const addTask = (event) => {
    event.preventDefault()
    const taskObj = {
      id: tasks.length + 1,
      content: newTask
    }
    setTasks(tasks.concat(taskObj))
    setNewTask('')
    }
}

export default App;
