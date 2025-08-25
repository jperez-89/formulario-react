import { useEffect, useState } from "react";
import { addUser, getUsers, deleteUser } from "../services/UserServices";

//? METODO PARA LOS TO-DO LIST
export const useFormTodoList = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setFormState(initialForm);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export const useFormUser = () => {
  //#region  Métodos y datos del formulario ==========================================
  const initialForm = {
    name: "",
    email: "",
    dob: "",
    username: "",
    password: "",
  };

  const initialUsers = [
    // {
    //   name: "",
    //   email: "",
    //   dob: "",
    //   username: "",
    //   password: "",
    // },
  ];

  const [Form, setForm] = useState(initialForm);
  const [Users, setUsers] = useState(initialUsers);
  // const [toggle, setToggle] = useState(false);
  const onResetForm = () => setForm(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...Form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = addUser(Form);
    response.then((data) => {
      setUsers([...Users, data]);
      console.log("MESSAGE: ADDED USER");
      // alert("Usuario agregado con éxito");

      onResetForm();
    });
  };
  //#endregion

  //#region Métodos y datos de la tabla ==========================================
  const handleDeleteUser = (userId) => {
    const response = deleteUser(userId);
    response.then((data) => {
      setUsers(Users.filter((User) => User._id !== userId));

      console.log("MESSAGE: ", data.message.toUpperCase());
    });
  };

  const handleUpdateUser = () => {
    // setToggle(!toggle);
    // console.log(user);
    // setForm(user);
    // const response = deleteUser(form);
    // response.then((data) => {
    //   setUsers(Users.filter((User) => User._id !== userId));
    //   console.log("MESSAGE: ", data.message.toUpperCase());
    // });
  };

  useEffect(() => {
    console.log("carga datos usuarios");
    const response = getUsers();
    response.then((data) => setUsers(data));
  }, []);
  //#endregion

  return {
    ...Form,
    Form,
    handleChange,
    handleSubmit,
    onResetForm,
    Users,
    handleDeleteUser,
    handleUpdateUser,
  };
};
