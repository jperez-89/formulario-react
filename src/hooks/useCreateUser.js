import { useState } from "react";
import { addUser, updateUser } from "../services/UserServices";
import { useNavigate } from "react-router";

export const useCreateUser = () => {
  const initialCreateUsers = {
    name: "",
    email: "",
    dob: "",
    username: "",
    password: "",
  };

  const initialUsers = [];
  const navigate = useNavigate();
  const [FormUser, setFormUser] = useState(initialCreateUsers);
  const [Users, setUsers] = useState(initialUsers);
  const [actionForm, setActionForm] = useState(true);

  const onResetForm = () => setFormUser(initialCreateUsers);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormUser({ ...FormUser, [name]: value });
  };

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
        setActionForm(true);
      });
    }
  };

  return {
    ...FormUser,
    FormUser,
    actionForm,
    handleChange,
    handleSubmit,
  };
};
