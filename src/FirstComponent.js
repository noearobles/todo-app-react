import React from "react";

function FirstComponent(props) {
    console.log('This is our listing component', props.listOfTodos)
    return (
        <div>
            <h1>This is our listing component</h1>
            <ol>
                {props.listOfTodos.map((item, index) => {
                    return <li key={index}>
                        {props.listOfTodos[index]}
                    </li>
                })}
            </ol></div>
    )
}

export default FirstComponent;