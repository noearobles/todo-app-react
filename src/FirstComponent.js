import React from "react";

function FirstComponent(props) {
    console.log('Todo List', props.listOfTodos)
    return (
        <div>
            <h1>Todo List</h1>
            <ol>
                {props.listOfTodos.map((item, index) => {
                    <div>
                        return <li key={index}>
                            {props.listOfTodos[index]}
                        </li>
                    </div>
                })}
            </ol></div>
    )
}

export default FirstComponent;