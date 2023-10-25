import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-red-300">
      <h1 className="text-4xl">Logout out</h1>
      <Link to="/">
        <button className="bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-600">
          Log out
        </button>
      </Link>
    </div>
  );
};

export default Logout;
