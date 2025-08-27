import { useState } from "react";
import { updateUser } from "../services/UserServices";

export const useUpdateUser = () => {
  const initialFormUsers = {
    name: "",
    email: "",
    dob: "",
    username: "",
    password: "",
  };
  const initialUsers = [];

  const [updatedUser, setUpdatedUser] = useState(initialFormUsers);

  const [FormUpdateUser, setFormUpdateUser] = useState(initialFormUsers);
  const [Users, setUsers] = useState(initialUsers);

  const onResetForm = () => setFormUpdateUser(initialFormUsers);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = updateUser(updatedUser);
    response.then((data) => {
      Users.map((user) => {
        if (user._id === data._id) {
          user.name = data.name;
          user.email = data.email;
          user.dob = data.dob;
          user.username = data.username;
          user.password = data.password;

          console.log("MESSAGE: UPDATED USER");
          // alert("Usuario agregado con éxito");
          onResetForm();
        }
      });

      setUsers(Users);
    });
  };

  return {
    ...FormUpdateUser,
    FormUpdateUser,
    handleChange,
    handleSubmit,
  };
};
