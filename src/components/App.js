import React, { useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodosContext from '../todos-context'
import todosReducer from '../todos-reducer'

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (!todos) return

    dispatch({ type: 'POPULATE_TODOS', todos })
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <TodoList todos={todos} />
      <AddTodo />
    </TodosContext.Provider>
  )
}

export default App
