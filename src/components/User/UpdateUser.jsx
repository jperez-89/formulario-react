import React from 'react'
import { useUpdateUser } from '../../hooks/useUpdateUser';

export const UpdateUser = () => {
    const { FormUpdateUser, actionForm, handleChange, handleSubmit } = useUpdateUser()

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
                type="text"
                name="name"
                value={FormUpdateUser.name}
                onChange={handleChange}
            // required
            />
            <label>Correo electrónico:</label>
            <input
                type="email"
                name="email"
                value={FormUpdateUser.email}
                onChange={handleChange}
            // required
            />
            <label>Fecha de nacimiento:</label>
            <input
                type="date"
                name="dob"
                value={FormUpdateUser.dob}
                onChange={handleChange}
            // required
            />
            {actionForm &&
                <>   <label>Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={FormUpdateUser.username}
                        onChange={handleChange}
                    // required
                    />
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={FormUpdateUser.password}
                        onChange={handleChange}
                    // required
                    />
                </>}
            <button type="submit">{actionForm ? "GUARDAR" : "ACTUALIZAR"}</button>
        </form>

    );
}
