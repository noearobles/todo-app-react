import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, RemoveTodo }) {
  return (<div className="task" style={{ textDecoration: todo.isCompleted ? 'line-through' : '}' }}>
    {todo.text}
    <button style={{ background: "red" }} onClick={() => RemoveTodo(index)}>x</button>
    <button onClick={() => completeTodo(index)}>Complete</button>
  </div>)
}

function TodoForm({ addTodo, index }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('')
  }
  return (
    <div className='create-task'>
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='Add todo'>
      </input>
      <button type='submit'>Submit</button>
    </form></div>
  )
}
function App() {
  const [todos, listOfTodos] = useState([
    {
      text: 'Make a todo!',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    listOfTodos(newTodos)
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    listOfTodos(newTodos)
  }
  const RemoveTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    listOfTodos(newTodos)
  }
  return (
    <div className="todo-container" >
      <div className='header'>TODO-LIST</div>
      <div className='tasks'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} RemoveTodo={RemoveTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
};
export default App;