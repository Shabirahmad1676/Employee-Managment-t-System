import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskForm = () => {

  const [userdata, setUserdata] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submithandler = (e)=>{
      e.preventDefault()
     

      setNewTask({taskDate,taskTitle,taskDescription,asignTo,category, active:false, completed:false,failed:false,newTask:true})

      const employeeData = userdata

      employeeData.forEach((elem) => {
        if(asignTo == elem.firstName){
          elem.tasks.push(newTask)
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }
      });

      setUserdata(employeeData)
      console.log(employeeData);
      

      setTaskTitle("")
      setTaskDate("")
      setTaskDescription("")
      setAsignTo("")
      setCategory('')

    }



  return (
    <div className='p-5 bg-[#313030] mt-7 rounded'>

    <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-wrap items-start justify-between  w-full '>

    <div className='w-1/2 '>
    <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input value={taskTitle}
        onChange={(e)=>
        {setTaskTitle(e.target.value)
        }}
         className='text-sm text-white py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='Make UI Design' />
    </div>
    <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input value={taskDate}
        onChange={(e)=>
          {setTaskDate(e.target.value)
          }}
         className='text-sm text-white py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="date" />
   </div>
    
   <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
        <input value={asignTo}
        onChange={(e)=>
          {setAsignTo(e.target.value)
          }} className='text-sm text-white py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='Me, You, She' />
   </div>

   <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input value={category}
        onChange={(e)=>
          {setCategory(e.target.value)
          }} className='text-sm text-white py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='Design Development etc'/>   
    </div>
    </div>
   
    <div className='w-2/5 flex flex-col items-start mt-2'>
      <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
      <textarea value={taskDescription}
        onChange={(e)=>
          {setTaskDescription(e.target.value)
          }} className='w-full text-white h-50 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-50 mb-0.5' name="" id="" cols={30} rows={10}></textarea>
      <button className='bg-emerald-400 px-5 w-full py-3 rounded-md mt-4'>Create Task</button>
    </div>

  </form>
</div>
  )
}

export default TaskForm