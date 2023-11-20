import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import WomenLogo from '../images/women.jpg';

const WorkTime = () => {

  const [dienstbeginn, setDienstbeginn] = useState("");
  const [dienstende, setDienstende] = useState("");
  const [username, setUsername] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const usernameFromQuery = queryParams.get("username");

  useEffect(() => {
    if (usernameFromQuery) {
      setUsername(usernameFromQuery);
    }
  }, [usernameFromQuery]);

  const handleSaveDienstbeginn = (e) => {
    setDienstbeginn(e.target.value);
  };

  const handleSaveDienstende = (e) => {
    setDienstende(e.target.value);
  };

  const handleSaveEntry = async () => {
    try {
      const data = {
        dienstbeginn,
        dienstende,
        username,
      };

      console.log ("data", data);

      const apiUrl = "http://localhost:4000/api/time-entries";

      const response = await axios.post(apiUrl, data);

      if (response.status === 201) {
        /* setDienstbeginn("");
        setDienstende(""); */
        alert("Arbeitszeiteintrag erfolgreich gespeichert");
      } else {
        console.error("Fehler beim Speichern des Arbeitszeiteintrags:", response.data);
      }
    } catch (error) {
      console.error("Fehler beim Speichern des Arbeitszeiteintrags:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${WomenLogo})`, filter: 'grayscale(70%)' }}>
      <h1 className="text-4xl mb-4 text-white">Arbeitszeiterfassung für {username}</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Dienstbeginn (HH:mm)"
          value={dienstbeginn}
          onChange={handleSaveDienstbeginn}
          className="border p-2"
          pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
        />
        <button
          onClick={handleSaveEntry}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Speichern
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          placeholder="Dienstende (HH:mm)"
          value={dienstende}
          onChange={handleSaveDienstende}
          className="border p-2"
          pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
        />
        <button
          onClick={handleSaveEntry}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Speichern
        </button>
      </div>
      <Link to="/logout">
        <button className="bg-red-500 text-white p-2 rounded mt-6 hover:bg-red-600">
          Log out
        </button>
      </Link>
    </div>
  );
};

export default WorkTime;

