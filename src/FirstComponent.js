import React from "react";

const button = {
    backgroundColor: '#61DAFB',
    color: 'white',
    fontSize: '14px',
    padding: '5px 30px',
    borderRadius: '5px',
    margin: '10px 5px',
    cursor: 'pointer'
}

function FirstComponent(props) {
    const { clickToRemove, listOfTodos, } = props;
    console.log('Todo List', props.listOfTodos)
    return (
        <div>
            <h1>Todo List</h1>
            <ol>
                {props.listOfTodos.map((item, index) => {
                    return <li style={{ color: '#61DAFB' }} key={index} index={index}>
                        {listOfTodos[index]}<button style={button} onClick={() => { clickToRemove(index) }}>Delete</button>
                    </li>
                })}
            </ol></div>
    )
}

export default FirstComponent;