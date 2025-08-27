import { useCreateUser } from "../../hooks/useCreateUser";

export const CreateUser = () => {
    const { FormUser, actionForm, handleChange, handleSubmit } = useCreateUser()

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
            {actionForm &&
                <>   <label>Usuario:</label>
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
                </>}
            <button type="submit">{actionForm ? "GUARDAR" : "ACTUALIZAR"}</button>
        </form>

    );
};