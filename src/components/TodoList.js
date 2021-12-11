import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import TodosContext from '../todos-context'

const TodoList = () => {
  const { todos } = useContext(TodosContext)
  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
}
export default TodoList
