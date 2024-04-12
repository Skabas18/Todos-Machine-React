import React from 'react'
import { TodoForm } from '../../ui/TodoForm/index';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  let todoText;
  
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(params.id);
    todoText = todo.text;
  }


  return (
    <TodoForm
      label='Edita tu TODO'
      defaultTodoText={todoText}
      submitText='Editar'
      submitEvent={(newText) => editTodo(params.id, newText)}
    />
  )
}

export { EditTodoPage }