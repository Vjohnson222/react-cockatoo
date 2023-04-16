import React from 'react';
// #2 Here we're importing a .css for  styles';
import './TodoListItem.module.css';

// Next - updated props to use destructuring
const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>

			{/* Lesson  3 - 1 Add a className to the <li> element and set the value as the class from CSS module */}
			<li className='ListItem'> {todo.fields.title} </li>
			{/* Add a button element, type "button", inside the list item with text "Remove"  */}
			<button type='button' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
		</div>
	);
};

export default TodoListItem;