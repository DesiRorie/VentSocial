import React, { useState, useEffect } from "react";

const Loginpage = ({ handleLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [correctLogin, setCorrectLogin] = useState();
  const [correctPassword, setCorrectPassword] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.length > 1 && /[a-zA-Z]/.test(login)) {
      setCorrectLogin(true);
      console.log(login);
    } else {
      setCorrectLogin(false);
    }
    const passwordWithoutWhitespace = password.replace(/\s/g, "");
    if (passwordWithoutWhitespace.length > 6) {
      setCorrectPassword(true);
      console.log(password);
    } else {
      setCorrectPassword(false);
    }
  };
  useEffect(() => {
    if (correctLogin && correctPassword) {
      handleLogin(login, true);
    } else {
      handleLogin(login, false);
    }
  }, [correctLogin, correctPassword]);

  return (
    <div className="loginPageContainer">
      <div className="loginPageContent">
        <h1>Vent</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login</label>
          <input
            autoComplete="on"
            placeholder="Login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            autoComplete="on"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>Login</button>{" "}
          <div style={{ textAlign: "center" }}>
            {correctLogin === false ? (
              <p style={{ color: "red" }}>
                login must contain atleast 2 characters
              </p>
            ) : null}
            {correctPassword === false ? (
              <p style={{ color: "red" }}>
                password must contain atleast 6 characters
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
