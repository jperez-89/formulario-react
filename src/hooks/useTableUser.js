import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/UserServices";
import { useNavigate } from "react-router";

export const useTableUser = () => {
  const initialUsers = [];
  const [Users, setUsers] = useState(initialUsers);
  const [FormUserTable, setFormUserTable] = useState(initialUsers);
  const navigate = useNavigate();

  const handleDeleteUser = (userId) => {
    const response = deleteUser(userId);
    response.then((data) => {
      setUsers(Users.filter((User) => User._id !== userId));

      console.log("MESSAGE: ", data.message.toUpperCase());
    });
  };

  function GoToEditFormUser(action) {
    navigate("/users/" + action);
    // redirect("/user/create");
  }

  const handleUpdateUser = async (user) => {
    // setActionForm(false);
    setFormUserTable(user);
    navigate("/users/update");
    // GoToEditFormUser();
  };

  useEffect(() => {
    console.log("carga datos usuarios");

    const response = getUsers();
    response.then((data) => {
      if (data.status !== 200) return console.log(data.response);

      setUsers(data.response);
    });
  }, []);

  return {
    Users,
    handleDeleteUser,
    handleUpdateUser,
    FormUserTable,
  };
};
