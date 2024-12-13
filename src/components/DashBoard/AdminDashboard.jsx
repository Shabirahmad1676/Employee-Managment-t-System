import React from 'react'

import TaskForm from '../Other/TaskForm'
import AllTask from '../Other/AllTask'
import Navbar from '../Other/NavBar'

const AdminDashboard = (props) => {
  return (
    <div className='p-10 h-screen w-full'>
      <Navbar changeUser={props.changeUser}/>
      <TaskForm/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
