import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./componente/Login";
import WorkTime from "./componente/WorkTime";
import Footer from "./componente/Footer";
import Logout from "./componente/LogOut";


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/work-time" element={<WorkTime />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
