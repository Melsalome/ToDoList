import React from 'react'


const ButtonAddTodo = ({ handleAddTodo}) => {
  
  return (
   
      <div className='todo-input-item'>
            <button type="button" className='primaryBtn' onClick={handleAddTodo}>Add</button>
          </div>
  )
}

export default ButtonAddTodo
