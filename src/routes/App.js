import React, { useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { EditTodoPage } from './edit/EditTodoPage';
import { NewTodoPage } from './new/NewTodoPage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
      </Routes>
    </HashRouter>
  )
}

export { App };