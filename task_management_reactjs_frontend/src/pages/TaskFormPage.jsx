import {useForm} from "react-hook-form";
import { useEffect } from "react";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from 'react-hot-toast';

export function TaskFormPage(){
    const {
        register, 
        handleSubmit, 
        formState: { errors },
        setValue
        } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit ( async (data)=> {
        if(params.id){
            await updateTask(params.id, data);
            toast.success('Successfully updated Task',
            {position: "top-right"});
        }
        else {
            await createTask(data);
            toast.success('Successfully Created a Task',
            {position: "top-right"})
        }
        navigate('/tasks');
    })

    useEffect(()=>{
        async function loadTask(){
            if(params.id){
                const res = await getTask(params.id);
                setValue('title', res.data.title);
                setValue('description', res.data.description);
            }
        }
        loadTask();
    }, []);


    return (
        <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="title" 
            {...register("title", {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.title && <span>This field is required</span>}

            <textarea rows="3" placeholder="Description"
            {...register("description", {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            ></textarea>
            {errors.description && <span>This field is required</span>}

            <button
            className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
            >Save</button>
        </form>

        {
            params.id && <button
                onClick={async ()=> {
                    const accept = window.confirm('Are you sure, you want to delete this task?');
                    if(accept){
                        await deleteTask(params.id);
                        navigate("/tasks");
                        toast.success('Successfully Deleted the Task',
                        {position: "top-right"})
                    }
                }}
                className="bg-red-500 p-3 rounded-lg block w-full mt-3"
            >
                Delete
            </button>
        }
        </div>
    )
}