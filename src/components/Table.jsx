// import { useFormUser } from '../hooks/useForm';
import trash from "../assets/trash.svg"
import edit from "../assets/edit.svg"
import "./Components.css";

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
    // 'actions'
];

// export const Table = () => {
export const Table = ({ Users = [], handleUpdateUser, handleDeleteUser }) => {
    // const { Users, handleUpdateUser, handleDeleteUser } = useFormUser()
    // console.log(Users);

    return (
        <table className='tblUsers'>
            <thead>
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
                    Users.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td >
                                <div className="IconUser">
                                    <a href="#" onClick={() => handleUpdateUser(user)} ><img src={edit} alt="edit" /></a>
                                    <a href="#" onClick={() => handleDeleteUser(user._id)} ><img src={trash} alt="trash" /></a>
                                </div>
                            </td>
                        </tr>
                        //? Con este formato los label deben ser iguales a los de la base de datos
                        // <tr key={idx}>
                        //     {headers.map((header) => (
                        //         <td key={header}>
                        //             {user[header.toLowerCase()]}
                        //         </td>
                        //     ))}
                        // </tr>
                    ))
                )}
            </tbody>
        </table>
    )

};