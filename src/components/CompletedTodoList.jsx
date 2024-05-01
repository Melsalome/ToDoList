import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";


const CompletedTodoList = ({ isCompleteScreen, todoListCompleted, completedTodoFn}) => {
    
      const handleDeleteCompleteTodoList = (index) => {
        const reduceComplete = [...todoListCompleted];
        reduceComplete.splice(index,1);
        completedTodoFn(reduceComplete);
      }

  return (
    <>
    <div>
       {isCompleteScreen===true && todoListCompleted.map((item,index) => {
        return(
          <>
        <div className='todo-list-item' key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p><small>Completed on: {item.completedOn}</small></p>
      </div> 
       <div>
          <RiDeleteBin5Line className='icon' onClick={() => handleDeleteCompleteTodoList(index)} title='deleted'/>
      </div>
      </>
        )
      })}
    </div>
    </>
  )
}

export default CompletedTodoList
