import React, { useState } from "react";
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
          onClick={handleSaveDienstbeginn}
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
          onClick={handleSaveDienstende}
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
