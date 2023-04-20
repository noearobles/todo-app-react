import React from "react";

function FirstComponent(props) {
    console.log('Todo List', props.listOfTodos)
    return (
        <div>
            <h1>Todo List</h1>
            <ol>
                {props.listOfTodos.map((item, index) => {
                    return <li key={index} index={index}>
                        {props.listOfTodos[index]}<button onClick={() => { props.clickToRemove(props.index) }}>Delete</button>
                    </li>
                })}
            </ol></div>
    )
}

export default FirstComponent;