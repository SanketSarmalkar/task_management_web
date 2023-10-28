import { useNavigate } from "react-router-dom"

export function Taskcard({task}) {

  const navigate = useNavigate();

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
      onClick={
        ()=>{
          navigate(`/tasks/${task.id}`)
        }
      }
    >
                <h1 className="font-bold uppercase text-2xl">{task.title}</h1>
                <p className="text-slate-300 text-xl">{task.description}</p>
                {/* <p className="text-slate-600">{task.completed}</p> */}
                <p className="text-slate-400 font-light text-xs pt-4 ">{task.created_at}</p>
                <p className="text-slate-400 font-light text-xs">{task.updated_at}</p>
                
    </div>
  )
}
