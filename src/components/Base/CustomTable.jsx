import { EditImage } from "./EditImage";
import { TrashImage } from "./TrashImage";

export const CustomTable = ({ headers, data, handleUpdateUser, handleDeleteUser }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-gray-900 uppercase bg-gray-50 dark:bg-orange-500 dark:text-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th scope="col" className="px-6 py-3" key={header}>{header.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td className="px-6 py-4" colSpan={headers.length}>Sin datos</td>
                        </tr>
                    ) : (
                        data.map((user, idx) => {
                            return (
                                <tr key={idx} className="bg-white font-semibold dark:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-200">
                                    <td scope="row" className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">{user.dob.split("T")[0]}</td>
                                    <td className="px-6 py-4">{user.username}</td>
                                    <td className="px-6 py-4">{user.password}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="IconUser">
                                            <button onClick={() => handleUpdateUser(user)} > <EditImage /></button>

                                            <button onClick={() => handleDeleteUser(user._id)} > <TrashImage /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div >

    )
}
