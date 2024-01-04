import { Navigate } from "react-router-dom";

function CheckFile({ children }) {
  fetch("http://localhost:5000/auth/createprod")
    .then(async function (response) {
      if (!response.ok) {
        return <Navigate to="/update" />;
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  return <div>{children}</div>;
}
export default CheckFile;
