import { useState } from 'react'
import './App.css'
import Todo  from './components/Todo'

function App() {
  const [task, setTask] = useState("Hi")

  return (
    <>
      <Todo task={task}/>
       
    </>
  )
}

export default App
