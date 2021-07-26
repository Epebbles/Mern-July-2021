import './App.css';
import Tasks from './components/Tasks';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if(tasks.length === 0) {
      return;
    }

    const taskItem = {
      text: tasks,
      complete: false
    }

    setTaskArr([...taskArr, taskItem]);
  };
  const handleDeleteTask = (deleteIndex) => {
    const filterTasks = taskArr.filter((_tasks, index) => {
    return index !== deleteIndex;
  });

  setTaskArr(filterTasks);

  };

  const handleCheckBox = (idx) => {
    const updatedTasks = taskArr.map((tasks, index) => {
      if (index === idx) {
        tasks.complete = !tasks.complete;
      }
      return tasks;
    });
    setTasks(updatedTasks)
  };

  return (
    <div className="App">
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input onChange={(e) => {
          setTasks(e.target.value)
        }} type="text"
          value={tasks.text}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
        <hr />
      {taskArr.map((tasks, index) => {
        return <Tasks key={index} 
        tasks={tasks} 
        handleCheckBox={handleCheckBox}
        index={index} 
        handleDeleteTask={handleDeleteTask}/>
      })} 

    </div>
  );
}

export default App;
