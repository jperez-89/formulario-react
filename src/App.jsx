import './App.css'
import { AddTodo } from './components/AddTodo'
import { Formulario } from './components/Form'
import { ListTodo } from './components/ListTodo'
import { Menu } from './components/Menu'
import { Table } from './components/Table'
import { useFormUser } from './hooks/useForm'
import { useTodo } from './hooks/useTodo'

function App() {
  // Se importan las funciones y datos del custom hook
  const { handleTab, todos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo,
  } = useTodo()

  const { Form, handleChange, handleSubmit, Users, handleUpdateUser, handleDeleteUser } = useFormUser()

  return (
    <>
      <header>
        <Menu handleTab={handleTab} />
      </header>

      <main>
        <div className="card">
          <div className="card-counter-todos">
            <h3>Total Tareas: <span>{todosCount}</span></h3>
            <h3>Tareas Pendientes: <span>{pendingTodos}</span></h3>
          </div>
          {/* <AddTodo /> */}
          <AddTodo handleNewTodo={handleNewTodo} />
          <ListTodo todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} handleUpdateTodo={handleUpdateTodo} />
        </div>

        <div >
          {/* <Formulario /> */}
          <Formulario Form={Form} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>

        <div>
          {/* <Table /> */}
          <Table Users={Users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
        </div>
      </main>
    </>
  )
}

export default App
