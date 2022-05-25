import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ContestForm from "./Contestformpage/ContestForm"
import Contact from "./contactpage/Contact";
import Home from "./HomePage/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const NavBar = ({ contests, onAddNewContest }) => {
  
  return (
    <div>
      <Router>
        <div>
          <nav className="flex text-white font-bold w-full bg-navbg bg-opacity-50 justify-between px-10">
            <div>
              <h1 className="p-6 text-xl">TechNerds</h1>
            </div>

            <div>
              <ul className="md:flex">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contestform">Create Contest</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="p-6 text-secondary">
              <NavLink to="/login"> Logout </NavLink>
            </div>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home contests={contests} />} />
            <Route
              exact
              path="/contestform"
              element={<ContestForm onAddNewContest={onAddNewContest} />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
