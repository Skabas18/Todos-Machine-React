import React from 'react'
import { TodoForm } from '../../ui/TodoForm/index';
import { useTodos } from '../useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(params.id);
    return (
      <TodoForm
        label='Edita tu TODO'
        defaultTodoText={todo.text}
        submitText='Editar'
        submitEvent={(newText) => editTodo(params.id, newText)}
      />
    )
  }
}

export { EditTodoPage }