import React from 'react';

// Next - updated props to use destructuring
const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>
			{/* Update the todo item title to reference the new object format (hint: todo.fields.Title) */}
			<li> {todo.fields.title} </li>
			{/* Add a button element, type "button", inside the list item with text "Remove"  */}
			<button type='button' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
		</div>
	);
};

export default TodoListItem;