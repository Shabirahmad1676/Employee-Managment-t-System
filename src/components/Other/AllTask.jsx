import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
 const [userdata,setUserdata] =  useContext(AuthContext)
//  console.log(authData.employees);
  return (
    <>
    <div className='bg-[#1c1c1c]  p-5  mt-5 '>
    <div  className='bg-emerald-500  rounded-xl py-6 px-4 mt-2 flex justify-between'>
        <h2 className='w-1/5   text-2xl text-white font-bold '>Name</h2>
        <h2 className='w-1/5   text-2xl text-white font-bold'>New Task</h2>
        <h2 className='w-1/5   text-2xl text-white font-bold'>Active Task</h2>
        <h2 className='w-1/5   text-2xl text-white font-bold'>Completed</h2>
        <h2 className='w-1/5   text-2xl text-white font-bold'>Failed</h2>
      </div>


      <div className=''>  
      {userdata.map((elem,idx)=>{
        return  <div key={idx} className='rounded-xl border-[1px] border-cyan-500 py-6 px-4 mt-2 flex justify-between'>
        <h2 className='w-1/5   text-2xl text-white font-bold '>{elem.firstName}</h2>
        <h2 className='w-1/5   text-2xl text-blue-600 font-bold'>{elem.taskCounts.newTask}</h2>
        <h2 className='w-1/5   text-2xl text-orange-600 font-bold'>{elem.taskCounts.active}</h2>
        <h2 className='w-1/5   text-2xl text-white font-bold'>{elem.taskCounts.completed}</h2>
        <h2 className='w-1/5   text-2xl text-emerald-600 font-bold'>{elem.taskCounts.failed}</h2>
      </div>
      }) }
      </div>
     
    </div>
    </>
  )
}

export default AllTask