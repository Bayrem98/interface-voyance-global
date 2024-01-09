import axios from "axios";

export function login(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
      username: username,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
      fallback();
    });
}

export function logout() {
  localStorage.removeItem("access_token");
  window.location.reload();
}
