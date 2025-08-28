/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { userService } from "../services/UserServices";
import { useNavigate } from "react-router";

const UserContext = createContext()

// Contiene todas las funciones necesarias del usuario
// Esto reemplaza a los hooks Create, Table y Update
export function UserProvider(props) {
    const initialCreateUsers = {
        name: "",
        email: "",
        dob: "",
        username: "",
        password: "",
    };
    const [Users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);
    const [FormUser, setFormUser] = useState(initialCreateUsers);
    const [actionForm, setActionForm] = useState(true);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log("carga datos de usuarios");
        const response = userService({ method: "GET" })
        // const response = getUsers();
        response.then((data) => {
            if (data.status !== 200) {
                setErrors([data]);
            } else {
                setUsers(data.response);
            }
            showLoading(1000);
        });
    }, []);

    const showLoading = (time) => {
        setTimeout(() => {
            setLoading(false)
        }, time)
    }

    // Obtiene la informacion del formulario y actualiza el estado con la misma
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
        setLoading(true)

        if (actionForm) {
            if (FormUser.username === "")
                return alert("Debes completar todos los campos");

            const response = userService({ method: "POST", form: FormUser })
            // const response = addUser(FormUser);
            response.then((data) => {
                if (data.status !== 200 && data.status !== 201) {
                    setErrors([data])
                } else {
                    console.log("MESSAGE: USER ADDED");
                    setUsers([...Users, data.response]);
                    onResetForm();
                    navigate("/users");
                    showLoading(1500)
                }
            });
        } else if (!actionForm) {
            const response = userService({ method: "PUT", form: FormUser })
            // const response = updateUser(FormUser);
            response.then((data) => {
                if (data.status !== 200) {
                    console.log("Error de servicio, contacte al Admin", data.response);

                    alert("Error de servicio, contacte al Admin", data.response)
                } else {
                    const updatedUser = data.response

                    Users.map((user) => {
                        if (user._id === updatedUser._id) {
                            user.name = updatedUser.name;
                            user.email = updatedUser.email;
                            user.dob = updatedUser.dob;
                            user.username = updatedUser.username;
                            user.password = updatedUser.password;

                            console.log("MESSAGE: USER UPDATED");
                            // alert("Usuario agregado con éxito");
                        }
                    });

                    setUsers(Users);
                    onResetForm();
                    setActionForm(true);
                    navigate("/users");
                    showLoading(1500)
                }
            });
        }
    };

    const handleUpdateUser = async (user) => {
        setActionForm(false);
        setFormUser({ ...user, dob: user.dob.split("T")[0] });
        navigate("/users/update");
    };

    const handleDeleteUser = (userId) => {
        const response = userService({ method: "DELETE", userId: userId })
        // const response = deleteUser(userId);
        response.then((data) => {
            if (data.status !== 200) {
                console.log("Error de servicio, contacte al Admin", data.response);

                alert("Error de servicio, contacte al Admin", data.response)
            } else {
                console.log("MESSAGE: ", data.response.message.toUpperCase());
                setUsers(Users.filter((User) => User._id !== userId));
                showLoading(1500)
            }
        });
    };

    const onResetForm = () => setFormUser(initialCreateUsers);

    // El value se actualiza cuando algún valor de las const que se le pasó en el array cambia
    const value = useMemo(() => {
        return ({
            Users, errors, loading, FormUser, actionForm, handleAddUser, handleChange, handleSubmit, handleUpdateUser, handleDeleteUser
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users, FormUser, actionForm, loading, errors])

    // Se retorna el context con todas las funciones y propiedades
    return <UserContext value={value} {...props} />
}

//! Este será el método a invocar en cada archivo para utilizar las diferentes funciones
export function useUser() {
    const context = useContext(UserContext)

    if (!context) throw new Error("Componente no se encuentra dentro del contexto");

    return context
}

