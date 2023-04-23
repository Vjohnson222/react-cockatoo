import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';


// Passed todoList state as a prop named todoList to the TodoList component 
//Change todoList to reference props instead of the hard-coded variable

//Next - update props to use destructuring

const TodoList = ({ todoList, onRemoveTodo }) => {

		// Right Here 

		// TodoList.propTypes = {
		// 	onAddTodo: PropTypes.func,
		//   };

	return (
		<div>
			<ul>
			{todoList && todoList.map((todo) => (
   <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
))}
			</ul>
		</div>
	);
};
TodoList.prototype = {
	onRemoveTodo: PropTypes.func,
	todoList: PropTypes.array,
};
export default TodoList;