// #4 This is our new Nav component
import './TodoListItem.module.css';
import React from 'react';

const Nav = () => {
	return (
		<div>
			<br />
        <div class='nav' style={{ paddingBottom: '10px', float: 'center', backgroundColor: 'grey'}} >
		<br />
            <a href='#'style={{ textDecoration: 'none', fontWeight: 'bolder', paddingLeft: '300px', color: 'black', backgroundColor: 'gray', height: '.5in'}} >HOME</a>
            <a href='#'style={{ textDecoration: 'none', fontWeight: 'bolder', paddingLeft: '300px', color: 'black', backgroundColor: 'gray', height: '.5in'}} >ABOUT</a>
            <a href='#'style={{ textDecoration: 'none', fontWeight: 'bolder', paddingLeft: '300px', color: 'black', backgroundColor: 'gray', height: '.5in'}} >CONTACT</a>
		</div>
		</div>
	);
};

export default Nav;