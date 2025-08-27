import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { TableUser } from './components/User/TableUser.jsx'
import { AddTodo } from './components/Todo/AddTodo.jsx'
import { CreateUser } from './components/User/CreateUser.jsx'
import { UpdateUser } from './components/User/updateUser.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/users" element={<TableUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/update" element={<UpdateUser />} />
        <Route path="/todos" element={<AddTodo />} />
      </Route>
    </Routes>
    {/* </StrictMode> */}
  </BrowserRouter>
)
