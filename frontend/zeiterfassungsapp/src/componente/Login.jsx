import React, { useState } from "react";
import { Link } from "react-router-dom";
import DigitalLogo from "../images/digital.jpg";

const Login = () => {
  
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Das Standardverhalten des Formulars blockieren
    console.log("Benutzername:", username);

    // Überprüfen, ob der Benutzername nicht leer ist, bevor zur Arbeitszeitseite navigiert wird

    if (username.trim() !== "") {
      // Zur Arbeitszeitseite mit Benutzernamen als Parameter navigieren
      window.location.href = `/work-time?username=${username}`;
    } else {
      alert("Bitte geben Sie einen Benutzernamen ein.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${DigitalLogo})` }}
    >
      {" "}
      <h1 className="text-4xl mb-6 text-white">Erfassungs App</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2"
          value={username}
          onChange={handleUsernameChange}
        />
        <input type="password" placeholder="Password" className="border p-2" />
        <Link to="/work-time">
          <button className="bg-blue-500 text-white p-2 rounded       hover:bg-blue-600">
            Log in
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
