import React from 'react'

const Todo = ({todo}) => {
  const {id, title, complete} = todo;
  const h1 = <h1>{title}</h1>
  const text = complete ? <strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${id}`}>{text}</div>
  )
}

export default Todo;
