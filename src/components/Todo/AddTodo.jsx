import { useTodo } from "../../hooks/useTodo"
import { ListTodo } from "./ListTodo"
import "../Components.css"

export const AddTodo = () => {
    const { description, onInputChange, onResetFormTodo, todos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo
    } = useTodo({ description: '' })

    const onFormSubmit = (e) => {
        e.preventDefault()

        if (description.length <= 1) {
            alert("Debes agregar una tarea")
            return false;
        }

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        console.log("AddTodo - onFormSubmit");
        handleNewTodo(newTodo)
        onResetFormTodo()
    }

    return (
        <>
            <div className="card">
                <div className="card-counter-todos">
                    <h3>Total Tareas: <span>{todosCount}</span></h3>
                    <h3>Tareas Pendientes: <span>{pendingTodos}</span></h3>
                </div>

                <form className="formTodo" onSubmit={onFormSubmit}>
                    <input type="text" className="input-add" name="description" value={description || ""} placeholder="Lavar el coche" onChange={(e) => onInputChange(e)} />
                    <button className="btn-add" type="submit">Agregar</button>
                </form>

                <ListTodo todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} handleUpdateTodo={handleUpdateTodo} />
            </div>


        </>
    )
}
