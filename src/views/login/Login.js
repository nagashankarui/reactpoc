import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss';

const usersList = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
  { username: "user5", password: "password5" },
];

const LoginPage = () => {

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset errors
    setUsernameError("");
    setPasswordError("");

    // Validation logic
    if (!username) {
      setUsernameError("Please enter your username.");
    } else if (!usersList.some((user) => user.username === username)) {
      setUsernameError("Username not found.");
    } else if (!password) {
      setPasswordError("Please enter your password.");
    } else {
      const user = usersList.find((user) => user.username === username);

      if (user.password !== password) {
        setPasswordError("Invalid password.");
      } else {
        // Login successful
        navigate("/welcome");
      }
    }
  };

  return (
    <div className="main-login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="main-field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
          {/* {usernameError && <div className="errormsg">{usernameError}</div>} */}
          <div className="errormsg">{usernameError}</div>
        </div>


        <div className="main-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          {/* {passwordError && <div className="errormsg">{passwordError}</div>} */}
          <div className="errormsg">{passwordError}</div>
        </div>


        <button type="submit" className="loginbtn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
