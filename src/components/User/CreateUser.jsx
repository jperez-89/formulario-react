// import { useCreateUser } from "../../hooks/useCreateUser";
import { useUser } from "../../context/userContext";

export const CreateUser = () => {
    // const { FormUser, actionForm, handleChange, handleSubmit } = useCreateUser()
    // Se extraen las funciones del UserContext
    const { FormUser, handleChange, handleSubmit } = useUser()

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
                type="text"
                name="name"
                value={FormUser.name}
                onChange={handleChange}
            // required
            />
            <label>Correo electrónico:</label>
            <input
                type="email"
                name="email"
                value={FormUser.email}
                onChange={handleChange}
                placeholder="correo@correo.com"
            // required
            />
            <label>Fecha de nacimiento:</label>
            <input
                type="date"
                name="dob"
                value={FormUser.dob}
                onChange={handleChange}
            // required
            />
            <label>Usuario:</label>
            <input
                type="text"
                name="username"
                value={FormUser.username}
                onChange={handleChange}
            // required
            />
            <label>Contraseña:</label>
            <input
                type="password"
                name="password"
                value={FormUser.password}
                onChange={handleChange}
            // required
            />
            <button type="submit">GUARDAR</button>
            {/* <button type="submit">{actionForm ? "GUARDAR" : "ACTUALIZAR"}</button> */}
        </form>

    );
};