import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const token = document.cookie.split("=")[1];
  fetch("http://localhost:5000/auth/check?token=" + token)
    .then(async function (response) {
      if (!response.ok) {
        return <Navigate to="/login" />;
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  return <div>{children}</div>;
}

export default Auth;

export function Public({ children }) {
  const token = document.cookie.split("=")[1];
  console.log("token: " + token);

  if (token) {
    return <Navigate to="/profile" />;
  } else return <div>{children}</div>;
}
