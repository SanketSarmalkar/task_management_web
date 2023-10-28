import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-5">
        <Link to="/tasks">
            
        <h1 className="font-bold text-3xl mb-4">Task Management App</h1>
        </Link>
        <button className="bg-indigo-500 px-3 py-2 rounded-lg" 
        onClick={()=>{
          navigate('/task-form');
        }}>create task
        </button>
    </div>
  )
}
