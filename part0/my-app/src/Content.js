import React from "react";
import ReactDOM from 'react-dom';
import Part from "./Part";
const Content = (props) => {
    return (
        <div>
            <h2>Content of this course and number of exercises</h2>
            <Part num={1} part={props.content.parts[0].name} exercises={props.content.parts[0].exercises} />
            <Part num={2} part={props.content.parts[1].name} exercises={props.content.parts[1].exercises} />
            <Part num={3} part={props.content.parts[2].name} exercises={props.content.parts[2].exercises} />
        </div>
    )
}


export default Content