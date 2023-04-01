import React, { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
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
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
