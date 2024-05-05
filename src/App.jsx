import React, { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import CompletedTodoList from './components/CompletedTodoList';
import ButtonAddTodo from './components/ButtonAddTodo';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newtitle, setNewTitle] = useState('');
  const [completedTodo, setCompletedTodo] = useState([]);
  const [searchState, setSearchState] = useState('');
  const [filteredListState, setFilteredListState] = useState([]);
  const [renderToDo, setRenderToDo] = useState('');


  const getData = (user = 'GrupoAJRM') => {
    fetch(`https://playground.4geeks.com/todo/users/${user}`).then((response) => { 
    return response.json()
    }).then((data) => {
      // console.log(data);
      setTodoList(data.todos);
    })
  }

const createToDo = (title, user = 'GrupoAJRM') => {
  fetch(`https://playground.4geeks.com/todo/todos/${user}`, 
    {
      method: 'POST',
      headers: {
        "content-type": "application/json",
          CORS: "Access-Control-Allow-Origin",
      }, body: JSON.stringify({label:`${title}`, is_done: false})
    }
  ).then((response) => {
    return response.json()
  }).then ((data) => {
    // console.log(data);
    setRenderToDo(data);
  })
}

const createUser = ( user = 'GrupoAJRM') => {
  fetch(`https://playground.4geeks.com/todo/users/${user}`, 
    {
      method: 'POST',
      headers: {
        "content-type": "application/json",
          CORS: "Access-Control-Allow-Origin",
      }, body: JSON.stringify({name: `${user}`})
    }
  ).then((response) => {
    return response.json()
  }).then ((data) => {
    // console.log(data);
    setRenderToDo(data);
  })
}

// useEffect( () => {
//   createUser();
// },[])

  const handleAddTodoList = () => {
  createToDo(newtitle);
    setNewTitle('');
  };

 
  useEffect(() => {
  
    searchState === '' ?  

    setFilteredListState(todoList) : 
    
    setFilteredListState(todoList.filter((item) => {
      return item.label.toLowerCase().includes(searchState.toLowerCase()); 
    }))
    
    
  }, [searchState, todoList]);
  
useEffect( () => {
  getData();
},[renderToDo])

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
            <ButtonAddTodo handleAddTodo={handleAddTodoList}></ButtonAddTodo>
          </div>
          </div>
    <div className='btn-area'>
      <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>To do</button>
      <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
    </div>
    <div className='todo-list'>
      <TodoList newTitle={newtitle}  isCompleteScreen={isCompleteScreen} todoListFnSet={setFilteredListState} todoOriginalList={filteredListState} todoListCompleted={completedTodo} completedTodoFn={setCompletedTodo} renderTodoSet={setRenderToDo}></TodoList>
     
      <CompletedTodoList isCompleteScreen={isCompleteScreen} todoListCompleted={completedTodo} renderTodoSet={setRenderToDo}></CompletedTodoList>
      
    </div>
    <div className='search'>
    <label>Search your task</label>
      <input type='text'id="search" value={searchState} onChange={(event) => setSearchState(event.target.value)}></input>
    </div>
      
    </div>
      </div>
      </div>
      


    
    

  )
}

export default App
