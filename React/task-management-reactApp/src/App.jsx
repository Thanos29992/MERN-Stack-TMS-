import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './TaskInput'
import TaskLists from './TaskLists'

function App() {
  return (
    <div className='mainContainer'>
      <h3>Task Management System</h3>
      <TaskInput />
      <TaskLists />
    </div>
  )
}

export default App
