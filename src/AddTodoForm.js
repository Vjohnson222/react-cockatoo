import { useState } from "react";
import React from "react";
import InputWithLabel from "./InputWithLabel";

//Next updated props to use destructuring

const AddTodoForm = ({ onAddTodo }) => {
  //Create new state variable named todoTitle with setter setTodoTitle
  const [todoTitle, setTodoTitle] = useState("");

  // Above the handleAddTodo function, declare a new function
  //named handleTitleChange that takes event as a parameter
  const handleTitleChange = (event) => {
    //First, retrieve the input value from the event object
    // and store in variable named newTodoTitle
    const newTodoTitle = event.target.value;

    //  Then, call the state setter setTodoTitle and pass newTodoTitle
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    // Here we removed the todoTitle variable and updated onAddTodo
    // callback handler to pass our todoTitle state variable instead
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        {/* below Moved to InputWithLabel.js  */}

        {/* Refactor AddTodoForm.js to use new InputWithLabel component and pass the necessary props    */}

        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
			{/* label prop to the InputWithLabel component with value "Title"  */}
          <strong>My Title:</strong>
        </InputWithLabel>

{/* Change #1 -Right here - You need to give value to this button - See notes 9   */}
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
