import { useFormTodoList } from "../hooks/useForm"
// import { useTodo } from "../hooks/useTodo"
import "./Components.css"

export const AddTodo = ({ handleNewTodo }) => {
    const {
        description,
        onInputChange,
        // onResetForm
    } = useFormTodoList({ description: '', })

    // const { handleNewTodo } = useTodo()

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
        // console.log(newTodo);
        handleNewTodo(newTodo)
        // onResetForm()
    }

    return (
        <form className="formTodo" onSubmit={onFormSubmit}>
            <input type="text" className="input-add" name="description" value={description} placeholder="Lavar el coche" onChange={onInputChange} />
            <button className="btn-add" type="submit">Agregar</button>
        </form>
    )
}

/**CODIGO BUENO */
// import { useForm } from "../hooks/useForm"
// import "./Components.css"

// export const AddTodo = ({ handleNewTodo }) => {
//     const {
//         description,
//         onInputChange,
//         onResetForm
//     } = useForm({ description: '', })

//     const onFormSubmit = (e) => {
//         e.preventDefault()

//         if (description.length <= 1) {
//             alert("Debes agregar una tarea")
//             return false;
//         }

//         let newTodo = {
//             id: new Date().getTime(),
//             description: description,
//             done: false
//         }

//         console.log("AddTodo - onFormSubmit");
//         // console.log(newTodo);
//         handleNewTodo(newTodo)
//         onResetForm()
//     }

//     return (
//         <form onSubmit={onFormSubmit}>
//             <input type="text" className="input-add" name="description" value={description} placeholder="Lavar el coche" onChange={onInputChange} />
//             <button className="btn-add" type="submit">Agregar</button>
//         </form>
//     )
// }
