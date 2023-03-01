import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


//oh no Delete the useSemiPersistentState function call from App
function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
//Inside the side-effect handler function, define a new Promise 
//and pass in a callback function with parameters resolve and reject
	useEffect(() => {
	new Promise((resolve) =>

	//setTimeout method) with a delay time: 2000 milliseconds (2 seconds)


	
	setTimeout(
			() =>

			//Then Inside the timeout callback function, call the parameter resolve 
	//and pass it an Object with property data as a nested empty Object
	resolve({
			data: {
		todoList: JSON.parse(localStorage.getItem('savedTodoList')),
				},
				}),	2000)
// Chain a then method to your Promise constructor and pass it a function with parameter result


//Then add another line to set isLoading state to false
		).then((results) => {
			setTodoList([...results.data.todoList]);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {

		//add an if statement to check that isLoading is false before setting localStorage
		if (!isLoading) {
			localStorage.setItem('savedTodoList', JSON.stringify(todoList));
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
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{/* { isLoading  */} 

			
			{/* Then create a new paragraph element above TodoList with text "Loading..." */}
			
			{/* Using a ternary operator inside JSX, if isLoading is true render the loading message, otherwise render the TodoList component */}
			
			{/* For the Ternary - This code should display the "Loading" message when isLoading is true and the TodoList 
			component when isLoading is false, as expected */}
			{isLoading ? (
				<p>Loading </p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</div>
	);
}

export default App;