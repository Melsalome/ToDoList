import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";



const TodoList = ({ isCompleteScreen, todoListFnSet, todoOriginalList, todoListCompleted, completedTodoFn}) => {


      const handleDeleteTodoList = (index) => {
        const reduceTodo = [...todoOriginalList];
        reduceTodo.splice(index,1);
        todoListFnSet(reduceTodo);
      }
    
      const handleComplete = (index) => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const completedOn = day + '-' + month + '-' + year + 'at' + hour + ':' + minutes;
      
        const completedItem =  {
          ...todoOriginalList[index],
          completedOn:completedOn
        }
       
        const updatedTodoList = () => {
        todoOriginalList.filter ( (item, indx) => indx != index);
          todoListFnSet(updatedTodoList)
        }
      
        const uptadedCompleteArray = [...todoListCompleted, completedItem];
        completedTodoFn(uptadedCompleteArray);
        handleDeleteTodoList(index);
      }

  return (
   <>
     {isCompleteScreen===false && todoOriginalList.map((item,index) => {
        return(
          <>
        <div className='todo-list-item' key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div> 
       <div>
          <RiDeleteBin5Line className='icon' onClick={() => handleDeleteTodoList(index)} title='deleted'/>
          <FaCheckCircle className='check-icon' title='completed' onClick={() => handleComplete(index)}/>
      </div>
      </>
        )
      })}
   
   </>
  )
}

export default TodoList


