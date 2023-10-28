import {TasksPage} from './pages/TasksPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Toaster } from "react-hot-toast"

export default function App(){
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/task-form" element={<TaskFormPage/>}/>
          <Route path="/tasks/:id" element={<TaskFormPage />}/>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}