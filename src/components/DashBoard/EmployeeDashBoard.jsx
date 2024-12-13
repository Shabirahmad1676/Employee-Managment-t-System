import React from 'react'
import TaskDashboard from '../Other/TaskDashboard'
import TaskList from '../TaskList/TaskList'
import Navbar from '../Other/NavBar'

const EmployeeDashBoard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Navbar changeUser={props.changeUser} data={props.data} />
      <TaskDashboard data={props.data} />
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashBoard
