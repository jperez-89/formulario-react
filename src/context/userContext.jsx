/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { addUser, getUsers, updateUser, deleteUser } from "../services/UserServices";
import { useNavigate } from "react-router";

const UserContext = createContext()

export function UserProvider(props) {
    const initialCreateUsers = {
        name: "",
        email: "",
        dob: "",
        username: "",
        password: "",
    };
    const [Users, setUsers] = useState([]);
    const [FormUser, setFormUser] = useState(initialCreateUsers);
    const [actionForm, setActionForm] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("carga datos usuarios");

        const response = getUsers();
        response.then((data) => {
            if (data.status !== 200) return console.log(data.response);

            setUsers(data.response);
        });
        setActionForm(true);

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormUser({ ...FormUser, [name]: value });
    };

    const handleAddUser = () => {
        onResetForm()
        setActionForm(true);
        navigate("/users/create");
    }

    // Funcion que agrega y actualiza un usuario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (actionForm) {
            if (FormUser.username === "")
                return alert("Debes completar todos los campos");

            const response = addUser(FormUser);
            response.then((data) => {
                if (data.status !== 200) return console.log(data.response);

                setUsers([...Users, data.response]);
                console.log("MESSAGE: ADDED USER");
                // alert("Usuario agregado con éxito");

                onResetForm();
                navigate("/users");
            });
        } else if (!actionForm) {
            const response = updateUser(FormUser);
            response.then((data) => {
                const updatedUser = data.response

                Users.map((user) => {
                    if (user._id === updatedUser._id) {
                        user.name = updatedUser.name;
                        user.email = updatedUser.email;
                        user.dob = updatedUser.dob;
                        user.username = updatedUser.username;
                        user.password = updatedUser.password;

                        console.log("MESSAGE: UPDATED USER");
                        // alert("Usuario agregado con éxito");
                    }
                });

                setUsers(Users);
                onResetForm();
                setActionForm(true);
                navigate("/users");
            });
        }
    };

    const handleUpdateUser = async (user) => {
        setActionForm(false);
        setFormUser({ ...user, dob: user.dob.split("T")[0] });
        navigate("/users/update");
    };

    const handleDeleteUser = (userId) => {
        const response = deleteUser(userId);
        response.then((data) => {
            if (data.message !== "User deleted") return console.log("MESSAGE: ERROR AL ELIMINAR EL USUARIO", data);

            setUsers(Users.filter((User) => User._id !== userId));
            console.log("MESSAGE: ", data.message.toUpperCase());
        });
    };

    const onResetForm = () => setFormUser(initialCreateUsers);

    // El value se actualiza cuando algún valor de las const que se le pasó en el array cambia
    const value = useMemo(() => {
        return ({
            Users, FormUser, actionForm, handleAddUser, handleChange, handleSubmit, handleUpdateUser, handleDeleteUser
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users, FormUser, actionForm])

    // Se retorna el context con todas las funciones u propiedades
    return <UserContext.Provider value={value} {...props} />
}

//! Este será el método a invocar en cada archivo para utilizar las diferentes funciones
export function useUser() {
    const context = useContext(UserContext)

    if (!context) throw new Error("Usuario no se encuentra dentro del contexto");

    return context
}

