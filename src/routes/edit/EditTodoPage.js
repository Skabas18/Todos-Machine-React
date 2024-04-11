import React from 'react'
import { TodoForm } from '../../ui/TodoForm/index';
import { useTodos } from '../useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params =useParams();
  const {stateUpdaters} =useTodos();
  const {editTodo} = stateUpdaters
  return (
    <TodoForm
      label='Edita tu TODO'
      submitText='Editar'
      submitEvent={(newText) => editTodo(params.id, newText)}
    />
  )
}

export { EditTodoPage }