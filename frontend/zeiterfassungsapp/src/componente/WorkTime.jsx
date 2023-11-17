import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const WorkTime = () => {
  const [dienstbeginn, setDienstbeginn] = useState("");
  const [dienstende, setDienstende] = useState("");

  const handleSaveDienstbeginn = (e) => {
    setDienstbeginn(e.target.value)
  };

  const handleSaveDienstende = (e) => {
    setDienstende(e.target.value)
  };

  const handleSaveEntry = async (e) => {
    e.preventDefault();
      await axios.post('http://localhost:4000/api/time-entries', {
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(dienstbeginn, dienstende)
    })
      setDienstbeginn("");
      setDienstende("");

      alert('Arbeitszeiteintrag erfolgreich gespeichert');
    } catch (error) {
      console.error('Fehler beim Speichern des Arbeitszeiteintrags:', error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1 className="text-4xl mb-4">Arbeitszeiterfassung</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Dienstbeginn"
          value={dienstbeginn}
          onChange={(e) => setDienstbeginn(e.target.value)}
          className="border p-2"
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
          placeholder="Dienstende"
          value={dienstende}
          onChange={(e) => setDienstende(e.target.value)}
          className="border p-2"
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

