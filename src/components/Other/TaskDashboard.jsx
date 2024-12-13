import React from 'react'

const TaskDashboard = ({data}) => {
  return (
    <div className='flex screen   justify-between gap-5 mt-10'>
      <div className='h-40 w-1/2 bg-orange-400 py-6 px-9 rounded-xl'>
      <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-1/2 bg-pink-400 py-6 px-9 rounded-xl'>
      <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-white text-xl font-medium'>Accepted</h3>
      </div>
      <div className='h-40 w-1/2 bg-red-400 py-6 px-9 rounded-xl'>
      <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-white text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-1/2 bg-yellow-400 py-6 px-9 rounded-xl'>
      <h2 className='text-white text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-white text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskDashboard