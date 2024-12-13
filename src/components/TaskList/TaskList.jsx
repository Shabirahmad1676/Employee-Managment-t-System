import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Complete from './Complete'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskBar' className='w-full flex gap-5 overflow-x-auto  justify-start items-center h-[60%]  mt-8 py-5'>
      { data.tasks.map((elem,index)=>{
        if(elem.active) {
          return <AcceptTask key={index} data={elem}/>
        }
        if(elem.newTask) {
          return <NewTask key={index} data={elem}/>
        }
        if(elem.completed) {
          return <Complete key={index} data={elem}/>
        }
        if(elem.failed) {
          return <FailedTask key={index} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList