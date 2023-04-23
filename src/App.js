import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// The directions speak about a Nav Eelement 
import Nav from './Nav'
import './TodoListItem.module.css';

// #1 Here we added the new Nav component - but there's no nav element, and hey no worries here
// Also go back and retracefor sake of airtable away just to make this work for now


function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
// According to the directions 
  const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const url = `https://api.airtable.com/v0/${baseId}/Default`;

fetch(url, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  // do something with the response data
})
.catch(error => {
  // handle any errors
});

  useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setTodoList(data.records);
				setIsLoading(false);
			});
	});

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // const addTodo = (newTodo) => {
  //   setTodoList([...todoList, newTodo]);
  // };
  const addTodo = (newTodo) => {
    setTodoList(
      Array.isArray(todoList) ? [...todoList, newTodo] : [newTodo]
    );
  };
  const removeTodo = (id) => {
    const removeNewToDo = todoList.filter((list) => list.id !== id);
    setTodoList(removeNewToDo);
  };
 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
<Nav />
<h4 style={{ backgroundColor: 'grey', color: 'transparent', height: '.09in'}}>H</h4>
<h1 style={{ backgroundColor: 'black', height: '1in', color: 'white', padding: '1.5rem' }}>Todo List</h1>
<h5 style={{ backgroundColor: 'red', height: '.02in', color: 'transparent',  padding: '.5rem' }}>H</h5>

              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1> Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
