import { useState } from "react";
import React from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <br /><br />
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          <strong style={{ backgroundColor: 'gray', height: '1in',borderRadius: '10px', color: 'white', marginTop: '120px', padding: '.2rem' }}>TITLE:</strong>
        </InputWithLabel>

        <button style={{ backgroundColor: 'tan', height: '.3in',borderRadius: '10px', color: 'white', padding: '.2rem'  }}>Add</button>
      </form>
      <br /><br />
      <h4 style={{ backgroundColor: 'grey', color: 'transparent', height:  '.04in'}}>H</h4>
      <br /><br />
      <h4  style={{  marginLeft: "90px"}}>Thank you!</h4>
      <br /><br />
      <h1 style={{ backgroundColor: 'grey', height: '3.3in',  color: 'transparent', padding: '1.5rem' }}>H</h1>
    </div>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
