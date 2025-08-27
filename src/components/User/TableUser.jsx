// import { useTableUser } from "../../hooks/useTableUser";
import { CustomTable } from "../CustomTable";
import "../Components.css";
import { useUser } from "../../context/userContext";

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
    // Se extraen las funciones del UserContext
    const { Users, handleAddUser, handleUpdateUser, handleDeleteUser } = useUser()

    return (
        <div className="contentTableUsers">
            <button onClick={handleAddUser} className="flex font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-orange-500 hover:text-white focus:ring-4 focus:ring-orange-100 rounded-lg px-5 py-2.5 me-2 mb-2">Agregar Usuario</button>

            <CustomTable headers={headers} data={Users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
        </div>
    )
}

/* FUNCION ANTIGUA CON HOOKS
export default () => <UserProvider>
    <TableUser></TableUser>
</UserProvider>

function TableUser() {
    // const {Users, handleUpdateUser, handleDeleteUser} = useTableUser()
    const { Users, handleUpdateUser, handleDeleteUser } = useUser()

    return (
        <>
            <div className="contentTableUsers">
                <NavLink className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " to={"/users/create"}>Agregar Usuario</NavLink>

                 <CustomButton Text="Agregar usuario">
                </CustomButton> 

                <CustomTable headers={headers} data={Users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />

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
            </div >
        </>
    )
}
*/