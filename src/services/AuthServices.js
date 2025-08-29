const ENDPOINT_LOGNIN = "http://localhost:3000/api/auth/login";
const ENDPOINT_LOGOUT = "http://localhost:3000/api/auth/logout";

export const AuthServices = async (form = "") => {
  try {
    const response =
      form != ""
        ? await fetch(ENDPOINT_LOGNIN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          })
        : await fetch(ENDPOINT_LOGOUT, {
            method: "POST",
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
