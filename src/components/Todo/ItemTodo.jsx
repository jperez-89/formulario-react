import { TrashImage } from "../Base/TrashImage";
import "../Components.css";

export const ItemTodo = ({ todo, handleCompleteTodo, handleDeleteTodo }) => {
    return (
        <div className={`Container ${todo.done ? "checked" : ""}`} id={todo.id} >
            <div className="CheckField">
                <span type="checkbox" onClick={() => handleCompleteTodo(todo)} className={`CheckboxDone ${todo.done ? "checked" : ""}`} />
            </div>
            <div className="Todos">
                <div className="Description">
                    <h2>{todo.description} </h2>
                </div>
                <div className="IconTodo">
                    <button onClick={() => handleDeleteTodo(todo.id)} > <TrashImage /></button>
                </div>
            </div>
        </div>
    )
}
