import React, { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import CompletedTodoList from './components/CompletedTodoList';
import ButtonAddTodo from './components/ButtonAddTodo';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newtitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodo, setCompletedTodo] = useState([]);
  

  const handleAddTodoList = () => {
    let newTodoItem = {
      title: newtitle,
      description: newDescription,
    }

    const updatedTodoArray = [...todoList];
    updatedTodoArray.push(newTodoItem);
    setTodoList(updatedTodoArray);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <div>
      <div className='App'>
      <h1> TO DO LIST</h1>

      <div className='todo-wrapper'>
          <div className='todo-input'>
                <div className='todo-input-item'>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="What's the task title?" value={newtitle} onChange={(event) => setNewTitle(event.target.value)}/>
                 </div>
             <div className='todo-input-item'>
                <label htmlFor="">Description</label>
                <input type="text" placeholder="What's the task title?" value={newDescription} onChange={(event) => setNewDescription(event.target.value)}/>
              </div>
          <div className='todo-input-item'>
            <ButtonAddTodo handleAddTodo={handleAddTodoList}></ButtonAddTodo>
          </div>
          </div>
    <div className='btn-area'>
      <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>To do</button>
      <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
    </div>
    <div className='todo-list'>
      <TodoList newTitle={newtitle} newDescription={newDescription} isCompleteScreen={isCompleteScreen} todoListFnSet={setTodoList} todoOriginalList={todoList} todoListCompleted={completedTodo} completedTodoFn={setCompletedTodo}></TodoList>
    
      <CompletedTodoList isCompleteScreen={isCompleteScreen} todoListCompleted={completedTodo} completedTodoFn={setCompletedTodo}></CompletedTodoList>
      
    </div>
   
    </div>
      </div>
      </div>
      


    
    

  )
}

export default App
