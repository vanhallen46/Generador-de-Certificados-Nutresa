import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles/App.css";
import { AuthService } from "./services/auth.services";

const authService = new AuthService();
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      authService
        .login({
          username: username,
          password: password,
        })
        .then((resp) => {
          console.log(resp);
          if (resp?.signInUserSession) {
            sessionStorage.setItem(
              "idToken",
              resp.signInUserSession.idToken.jwtToken
            );
            console.log("user loged");
            setIsAuthenticated(true);
          } else {
            console.log("error login");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("error login");
        });
    } catch (err) {
      console.log(err);
      console.log("error login");
    }
    console.log(username, password);
  };

  return isAuthenticated ? (
    <Navigate to="./pages/menu" />
  ) : (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="user-container">
          <label>
            <input
              placeholder="Usuario"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div className="password-container">
          <label>
            <input
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button type="submit" className="submit-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
