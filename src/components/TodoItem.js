import React, { useContext } from 'react'
import TodosContext from '../todos-context'

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  if (todo.isCompleted) return <></>
  return (
    <>
      <p>{todo.title}</p>
      <button onClick={() => dispatch({ type: 'COMPLETE_TODO', id: todo.id })}>
        Complete
      </button>
    </>
  )
}

export default TodoItem
