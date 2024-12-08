import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [x , setx] = useState([])

  const inputRef = useRef()
  const add =(e)=>{
    e.preventDefault()
    const taskValue = inputRef.current.value
    const newTask = {completed : false , taskValue}
    setx([...x , newTask])
    inputRef.current.value=''
  }
  
  const taskDone = (index) => {
    const newx = [...x]
    newx[index].completed = !newx[index].completed
    setx(newx)
  }

  const deleteTask = (index) =>{
    const newx = [...x]
    newx.splice(index ,1)
    setx(newx)
  }
  
  const editTask = (index) =>{
    const newx = [...x]
    const newValue =  prompt('Edit task', newx[index].taskValue );
    if(newValue ==="") return;
    newx[index].taskValue = newValue
    setx(newx)
  }
  
  return (
    <div className="App">
     
     <h2>To do List</h2>

     <form  onSubmit={add} > 
      <input ref={inputRef} placeholder='Enter new task...' /> 
     <button type='submit' >Add</button>
  </form>

     <ul>
      {
        x.map((item , index) => {
          return <div className='liTask'> 
            <li className={item.completed ? "completed" : ""} onClick={()=> taskDone(index) } >
              {item.taskValue}
              </li>
            <div className='icons'>
              <span onClick={()=> editTask(index)}>🖊️</span>
              <span onClick={()=> deleteTask(index)}>❌</span>
            </div>
             
          </div>
        })
      }
     </ul>

    </div>
  );
}

export default App;
