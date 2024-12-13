import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-pink-600 p-5 h-full w-[300px] rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='text-white text-xl font-semibold bg-red-400 px-3 py-1 rounded-lg'>{data.category}</h2>
        <h3 className='text-white font-semibold text-xl'>{data.taskDate}</h3>
      </div>
      <h2 className='text-2xl font-bold text-white mt-7'>{data.taskTitle}</h2>
      <p className='mt-4 text-white font-medium'>{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-red-400 py-1 rounded-md shadow-md px-2 text-sm'>Mark as Completed</button>
        <button  className='bg-orange-400 rounded-md shadow-md py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
  )
}

export default AcceptTask