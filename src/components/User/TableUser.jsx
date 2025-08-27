import { EditImage } from "../EditImage";
import { TrashImage } from "../TrashImage";
import { useTableUser } from "../../hooks/useTableUser";
import { NavLink } from "react-router";
import "../Components.css";
import { CustomTable } from "../CustomTable";

const headers = [
    'Nombre',
    'Email',
    'Fecha de nacimiento',
    'Usuario',
    'Contraseña',
    // 'name',
    // 'email',
    // 'dob',
    // 'user',
    // 'password',
    'actions'
];

export const TableUser = () => {
    const { Users, handleUpdateUser, handleDeleteUser } = useTableUser()

    return (
        <>
            <div className="contentTableUsers">
                <NavLink className={"btn-add"} to={"/users/create"}>Agregar Usuario</NavLink>

                {/* <CustomTable headers={headers} data={Users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} /> */}

                <table className="w-full mt-5 text-left rtl:text-right text-black  dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase bg-orange-300  dark:text-gray-900">
                        <tr>
                            {headers.map((header) => (
                                <th key={header}>{header.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Users.length === 0 ? (
                            <tr>
                                <td colSpan={headers.length}>Sin datos</td>
                            </tr>
                        ) : (
                            Users.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <div className="IconUser">
                                                <button onClick={() => handleUpdateUser(user)} > <EditImage /></button>

                                                <button onClick={() => handleDeleteUser(user._id)} > <TrashImage /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            //  <td>{user.dob.split("T")[0]}</td>   {user.name} 
                            //? Con este formato los label deben ser iguales a los de la base de datos
                            // <tr key={idx}>
                            //     {headers.map((header) => (
                            //         <td key={header}>
                            //             {user[header.toLowerCase()]}
                            //         </td>
                            //     ))}
                            // </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>

    )
};