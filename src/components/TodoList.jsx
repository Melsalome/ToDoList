import React, { useState, useEffect } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";



const TodoList = ({ isCompleteScreen, todoOriginalList, completedTodoFn, renderTodoSet}) => {
  const [uncompletedTodoList, setUncompletedTodoList] = useState([]);

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
    }).catch(error => {
      console.log(error, 'Error on delete');
    })
  }

  const updatedTodo = (idTodo, user = 'GrupoAJRM') => {
    fetch(`https://playground.4geeks.com/todo/todos/${idTodo}`, 
      {
        method: 'PUT',
        headers: {
          "content-type": "application/json",
            CORS: "Access-Control-Allow-Origin",
        }, body: JSON.stringify({ is_done: true})
      }
    ).then((response) => {
      return response.json()
    }).then ((data) => {
      console.log(data);
      renderTodoSet(data);
    })
  }



      const handleDeleteTodoList = (id) => {
      deleteTodo(id);
      }
    
      const handleComplete = (id) => {
        updatedTodo(id);
      }

      const completedList = () => {
        const isCompleteList = todoOriginalList.filter ( (element) => {
          return element.is_done === true;
         }) 
         completedTodoFn(isCompleteList);
      } 

      const uncompletedList = () => {
        const notCompleteList = todoOriginalList.filter ( (element) => {
          return element.is_done === false;
         }) 
         setUncompletedTodoList(notCompleteList);
      } 

      useEffect( () => {
        completedList();
       uncompletedList();
      },[todoOriginalList])

  return (
   <>
     {isCompleteScreen===false && uncompletedTodoList.map((item,index) => {
        return(
          <>
        <div className='todo-list-item' key={index}>
        <h3>{item.label}</h3>
        {/* <p>{item.description}</p> */}
      </div> 
       <div>
          <RiDeleteBin5Line className='icon' onClick={() => handleDeleteTodoList(item.id)} title='deleted'/>
          <FaCheckCircle className='check-icon' title='completed' onClick={() => handleComplete(item.id)}/>
      </div>
      </>
        )
      })}
   
   </>
  )
}

export default TodoList


