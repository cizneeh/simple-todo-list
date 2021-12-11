const todosReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_TODOS':
      return action.todos

    case 'ADD_TODO':
      return state.concat(action.todo)

    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) return todo
        todo.isCompleted = true
        return todo
      })

    default:
      return state
  }
}

export default todosReducer
