import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ContestForm from "./Contestformpage/ContestForm"
import Contact from "./contactpage/Contact";
import Home from "./HomePage/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import {FiMenu, FiX} from "react-icons/fi"

const NavBar = ({ contests, onAddNewContest, onSearchChange }) => {
  const [nav, setNav] =useState(false);

  function handleClick(){
    setNav(!nav)
  }


  return (
    <div>
      <Router>
        <div>
          <nav className="flex text-white font-bold w-full bg-navbg bg-opacity-50 px-10 justify-between">
            <div>
              <h1 className="-ml-12 md:ml-0 p-6 text-xl">TechNerds</h1>
            </div>

            <div>
              <ul className="hidden md:flex">
                <li className="hover:text-secondary">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-secondary">
                  <NavLink to="/contestform">Create Contest</NavLink>
                </li>
                <li className="hover:text-secondary">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="p-6 text-secondary hidden md:flex md:-mr-72">
              <a href="/login">Dashboard</a>
            </div>
            <div onClick={handleClick}>
              {!nav ? (
                <FiMenu className="text-2xl md:hidden m-6 mr-0" />
              ) : (
                <FiX className="text-2xl md:hidden m-6 mr-0" />
              )}
            </div>
          </nav>

          <div>
            <ul className={!nav ? "hidden" : "bg-navbg md:hidden w-full"}>
              <li className="border-b-2 border-primary hover:text-secondary">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="border-b-2 border-primary hover:text-secondary">
                <NavLink to="/contestform">Create Contest</NavLink>
              </li>
              <li className="border-b-2 border-primary hover:text-secondary">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <a className="text-secondary" href="/login">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home contests={contests} onSearchChange={onSearchChange} />
              }
            />
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
