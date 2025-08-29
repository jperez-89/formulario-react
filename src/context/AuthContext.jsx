/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { AuthServices } from '../services/AuthServices';
import { useNavigate } from "react-router";

const AuthContext = createContext()

export function AuthProvider(props) {
    const frmLogin = {
        username: "",
        password: ""
    }
    const [token, setToken] = useState([]);
    const [FormLogin, setFormLogin] = useState(frmLogin);
    const [Errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onResetForm = () => setFormLogin(frmLogin);

    useEffect(() => {
        let tokenLocal = JSON.parse(localStorage.getItem("token"))

        if (tokenLocal != null) setToken(tokenLocal)

    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormLogin({ ...FormLogin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (FormLogin.username === "" && FormLogin.password === "")
            return alert("Debes completar todos los campos");

        const response = AuthServices(FormLogin)
        response.then((data) => {
            if (data.status !== 200) {
                setErrors([data])
            } else {
                console.log("MESSAGE: USER LOGGED");

                setToken([...token, data.response.token]);
                localStorage.setItem('token', JSON.stringify(data.response.token))
                onResetForm();
                navigate("/")
            }
        });
    };

    const handleLogOut = async (e) => {
        e.preventDefault();

        if (confirm("Seguro desea salir?")) {
            const response = AuthServices()
            response.then((data) => {

                if (data.status !== 200) {
                    setErrors([data])
                } else {
                    console.log("MESSAGE: USER SIGNOUT");

                    setToken([]);
                    localStorage.removeItem('token')
                    navigate("/")
                }
            });
        }
    };

    const value = useMemo(() => {
        return ({
            token, setToken, FormLogin, handleChange, handleSubmit, handleLogOut, Errors
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, FormLogin, Errors])

    return <AuthContext value={value} {...props} />
}

//! Este será el método a invocar en cada archivo para utilizar las diferentes funciones
export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) throw new Error("Componente no se encuentra dentro del contexto");

    return context
}