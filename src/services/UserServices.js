const ENDPOINT = "http://localhost:3000/api/users/";

export const userService = async ({ method, form = "" }) => {
  const userId = form._id ? form._id : "";
  const URL = userId ? ENDPOINT + userId : ENDPOINT;

  try {
    const response =
      form !== ""
        ? await fetch(URL, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          })
        : await fetch(URL, {
            method: method,
            headers: { "Content-Type": "application/json" },
          });

    if (response.ok) {
      return { status: response.status, response: await response.json() };
    } else {
      return { status: response.status, response: response.statusText };
    }
  } catch (error) {
    console.log("ERROR AL EJECUTAR EL SERVICIO ==>" + error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // console.log(response.status, response.statusText);

      return { status: response.status, response: await response.json() };
    } else {
      // console.log(response.status, response.statusText);

      return { status: response.status, response: response.statusText };
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
      // console.log(response.status, response.statusText);

      return { status: response.status, response: await response.json() };
    } else {
      // console.log(response.status, response.statusText);

      return { status: response.status, response: response.statusText };
    }
  } catch (error) {
    return {
      status: 500,
      response: "ERROR AL EJECUTAR EL SERVICIO ==> " + error,
    };
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
      // console.log(response.status, response.statusText);

      return { status: response.status, response: await response.json() };
    } else {
      // console.log(response.status, response.statusText);

      return { status: response.status, response: response.statusText };
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
      // console.log(response.status, response.statusText);

      return { status: response.status, response: await response.json() };
    } else {
      // console.log(response.status, response.statusText);

      return { status: response.status, response: response.statusText };
    }
  } catch (error) {
    console.log("ERROR AL EJECUTAR EL SERVICIO ==>" + error);
  }
};
