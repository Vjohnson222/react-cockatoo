import React from 'react';

// Next - updated props to use destructuring
const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>
			<li> {todo.title} </li>
			{/* Add a button element, type "button", inside the list item with text "Remove"  */}
			<button type='button' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
		</div>
	);
};

export default TodoListItem;