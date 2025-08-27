const ENDPOINT = "http://localhost:3000/api/users/";

export const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return { status: 200, response: await response.json() };
    } else {
      console.log("SIN DATOS");
      return { status: 500, response: "SIN DATOS" };
    }
  } catch (error) {
    return {
      status: 500,
      response: "ERROR AL EJECUTAR EL SERVICIO ==> " + error,
    };
  }
};

export const addUser = async (form = {}) => {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      return { status: 200, response: await response.json() };
    } else {
      console.log("NO SE GUARDARON LOS DATOS");
      return { status: 500, response: "NO SE GUARDARON LOS DATOS" };
    }
  } catch (error) {
    return {
      status: 500,
      response: "ERROR AL EJECUTAR EL SERVICIO ==> " + error,
    };
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(ENDPOINT + userId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.log("NO SE ELIMINARON LOS DATOS");
    }
  } catch (error) {
    console.log("ERROR AL EJECUTAR EL SERVICIO ==>" + error);
  }
};

export const updateUser = async (form = {}) => {
  const idUser = form._id;
  try {
    const response = await fetch(ENDPOINT + idUser, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      return { status: 200, response: await response.json() };
    } else {
      console.log("NO SE ACTUALIZARON LOS DATOS");
      return { status: 500, response: "NO SE ACTUALIZARON LOS DATOS" };
    }
  } catch (error) {
    return {
      status: 500,
      response: "ERROR AL EJECUTAR EL SERVICIO ==> " + error,
    };
  }
};

// const userFetch = async (method = "") => {
//   try {
//     const response = await fetch(ENDPOINT, {
//       method: method,
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       return await response.json();
//     } else {
//       console.log("SIN DATOS");
//     }
//   } catch (error) {
//     console.log("ERROR AL EJECUTAR EL SERVICIO ==>" + error);
//   }
// };
