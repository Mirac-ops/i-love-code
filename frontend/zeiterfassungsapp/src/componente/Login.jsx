import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-red-300">
      <h1 className="text-4xl mb-6">Erfassungs App</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <Link to="/work-time">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Log in
          </button>
        </Link>
      </form>
    </div>
    
  );
};

export default Login;
