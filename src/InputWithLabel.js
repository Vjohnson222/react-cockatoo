import React from 'react';

// 1.	Declare and export a new functional React component named InputWithLabel 

// Here The InputWithLabel function accepts an object with four props: 

const InputWithLabel = ({
	children,
	todoTitle,
	handleTitleChange,
    // This prop is not currently being used in the code 
	isFocused,
}) => {
	const inputRef = React.useRef();

	React.useEffect(() => {
		
		inputRef.current.focus();
	}, []);
	return (
		<>
		{/* Update todoTitle and handleTitleChange references to come from props */}
		{/* Replace label prop with children so that any child node(s) are used as the label text  
		
		 */}
			<label htmlFor='todoTitle'>{children} </label>
			<input
			// Use the useRef React hook to create an imperative ref named inputRef 
				ref={inputRef}
				id='todoTitle'
				name='title'
				value={todoTitle}
				onChange={handleTitleChange}
			/>
		</>
	);
};

export default InputWithLabel;