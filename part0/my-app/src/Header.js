import React from "react";
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>Welcome to {props.course.name}</h1>
        </div>
    )
}


export default Header