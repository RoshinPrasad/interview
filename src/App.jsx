import react, { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [subTask, setSubTask]=useState('');
  const [task, setTask] = useState([]);

  const handlebar = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleadd = () => {
    if (taskTitle.trim() != "") {
      setTask([...task,{title:taskTitle,subtasks:[]}]);
      setTaskTitle("");
    }
  };

  const handleaddsubtasktitle=(e)=>{
    setTaskTitle(e.target.value);
  }

  const handleAddSubtask=()=> {

    if(subtaskTitle.trim() !='' ){
    const updatedTasks = tasks.map((task)=>
  task.title===taskTitle
  ? {...task,subtasks : [...task.subtasks,subtaskTitle]}
  : task
  );
  setTask(updatedTaskes);
  setSubTaskTitle('');

  }

  return (
    <>
      <div>
        <h1> Task Lister </h1>
        <label>
          Task Title :
          <input type="text" value="taskTitle" onChange={handlebar}></input>
        </label>
        <button onClick={handleadd}> Add to Form </button>
<br />

   <label>
    Subtask Title :
    <input type='text' value={subtasktitle} onChange={handleaddsubtasktitle}></input>
   </label>
   <button onClick={handleAddSubtask}> Add SubTitle</button>
        <div>
<h2>Task List</h2>
<select>
  {task.map((task) => (
    <option key={task.title}>{task.title}</option>
  ))}
</select>

        </div>
      </div>
    </>
  );
}

export default App;
