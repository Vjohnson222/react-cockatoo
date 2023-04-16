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
        <br /><br />
        <InputWithLabel
        
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
			{/* label prop to the InputWithLabel component with value "Title"  */}
          <strong style={{ backgroundColor: 'gray', height: '1in',borderRadius: '10px', color: 'white', marginTop: '120px', padding: '.2rem' }}>TITLE:</strong>
        </InputWithLabel>

{/* Change #1 -Right here - You need to give value to this button - See notes 9   */}
        <button style={{ backgroundColor: 'tan', height: '.3in',borderRadius: '10px', color: 'white', padding: '.2rem'  }}>Add</button>
      </form>
      <br /><br />
      <h4 style={{ backgroundColor: 'grey', height: '.04in'}}></h4>
      <br /><br />
      <h4  style={{  marginLeft: "90px"}}>Thank you!</h4>
      <br /><br />
      <h1 style={{ backgroundColor: 'grey', height: '3.3in', color: 'white', padding: '1.5rem' }}></h1>

    </div>
  );
};

export default AddTodoForm;
