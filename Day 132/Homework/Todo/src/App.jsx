import { useState } from 'react'
import InputField from './Components/input'
import Button from './Components/submit'
import List from './Components/list'

function App() {
  const [inputValues, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValues.trim()){
      setTasks([...tasks,inputValues]);
      setInputValue("");
    }
  }
  const removeTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index,1);
    setTasks(updatedTask);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simple to do list</h1>
      <InputField inputValue={inputValues} handleInputValue={setInputValue} />
      <Button handleClick={addTask} />
      <List tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App