import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Complete = ({data}) => {

  const [userdata, setUserdata] = useContext(AuthContext)

  const handleComplete = (e)=>{
    alert('completed')
  }

  return (
    <div className='flex-shrink-0 bg-cyan-500 p-5 h-full w-[300px] rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='text-white text-xl font-semibold bg-red-400 px-3 py-1 rounded-lg'>{data.category}</h2>
        <h3 className='text-white font-semibold text-xl'>{data.taskdate}</h3>
      </div>
      <h2 className='text-2xl font-bold text-white mt-7'>{data.taskTitle}</h2>
      <p className='mt-4 text-white font-medium'>{data.taskDescription}</p>
      <div div className='mt-4'>
        <button onClick={(e)=>{handleComplete(e)}} className='bg-red-400 py-1 px-2 text-sm rounded-md'>Complete</button>
      </div>
      </div>
  )
}

export default Complete