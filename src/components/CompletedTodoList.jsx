import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";


const CompletedTodoList = ({ isCompleteScreen, todoListCompleted, renderTodoSet}) => {
    

  const deleteTodo = (idTodo, user = 'GrupoAJRM') => {
    fetch(`https://playground.4geeks.com/todo/todos/${idTodo}`, 
      {
        method: 'DELETE',
        headers: {
          "content-type": "application/json",
            CORS: "Access-Control-Allow-Origin",
        },
      }
    ).then((response) => {
      // console.log(response)
      return response;
    }).then ((data) => {
      renderTodoSet(data);
    })
  }

  

      const handleDeleteCompleteTodoList = (id) => {
        deleteTodo(id)
      }
// console.log(todoListCompleted);
  return (
    <>
    <div>
       {isCompleteScreen===true && todoListCompleted.map((item,index) => {
        return(
          <>
        <div className='todo-list-item' key={index}>
        <h3>{item.label}</h3>
      </div> 
       <div>
          <RiDeleteBin5Line className='icon' onClick={() => handleDeleteCompleteTodoList(item.id)} title='deleted'/>
      </div>
      </>
        )
      })}
    </div>
    </>
  )
}

export default CompletedTodoList
