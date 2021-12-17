import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    userName: "",
    password: "",
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    if (inputField.userName === "ajay" && inputField.password === "123") {
      localStorage.setItem("userName", inputField.userName);
      navigate("Home");
    } else {
      alert("user name or password is incorrect");
    }
  };

  return (
    <div style={{ height: "90vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #ccc", padding: "100px", backgroundColor: "#aaaacc" }}>
        <div style={{ marginBlock: "10px" }}>
          <input type="text" name="userName" onChange={inputsHandler} placeholder="User Name" value={inputField.user_name} />
        </div>
        <div style={{ marginBlock: "10px" }}>
          <input type="text" name="password" onChange={inputsHandler} placeholder="Password" value={inputField.password} />
        </div>
        <div style={{ marginBlock: "10px" }}>
          <button onClick={submitButton}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
