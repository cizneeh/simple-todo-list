import React, { useState, useContext } from 'react'
import TodosContext from '../todos-context'

const AddTodo = () => {
  const [input, setInput] = useState('')
  const { dispatch } = useContext(TodosContext)

  const addTodo = e => {
    e.preventDefault()

    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: input,
      isCompleted: false,
    }
    dispatch({
      type: 'ADD_TODO',
      todo,
    })

    setInput('')
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
        />
        <button disabled={input.trim() === ''}>Add</button>
      </form>
    </>
  )
}

export default AddTodo
