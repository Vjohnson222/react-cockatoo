import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		new Promise((resolve) =>
			setTimeout(
				() =>
					resolve({
						data: {
							todoList: JSON.parse(localStorage.getItem('savedTodoList')),
						},
					}),
				2000
			)
		).then((results) => {
			setTodoList([...results.data.todoList]);
			setIsLoading(false);
		});

		// add an if statement to check that isLoading is false before setting localStorage
		if (!isLoading) {
			localStorage.setItem('savedTodoList', JSON.stringify(todoList));
		}
		
		// Lesson 1-8 Inside the first useEffect hook, replace the placeholder Promise with the following...
		fetch(
			`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`,
			{
			  method: "GET",
			  headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
			  },
			}
		  )
			.then((response) => response.json())
			.then((result) => {
			  setTodoList([...result.records]);
			  setIsLoading(false);
			});
	}, []);

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	const removeTodo = (id) => {
		const removeNewToDo = todoList.filter((list) => list.id !== id);
		setTodoList(removeNewToDo);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<p>Loading </p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</div>
	);
}

export default App;
