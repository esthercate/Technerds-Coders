import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config/firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      nav("/home");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="m-14 h-auto">
      <div className="bg-navbg bg-opacity-70 p-10 m-auto sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-md">
        <h1 className="text-secondary text-center text-xl font-bold">Signup</h1>
        <div className="text-center">
          <input
            className="m-4"
            type="email"
            placeholder="Enter your Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            className="m-4"
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <br />
          <button className="m-4 w-1/2 md:w-1/4 p-4" onClick={register}>
            Signup
          </button>
          <p className="opacity-80 p-5 text-sm">
            Already have an account? Click here to{" "}
            <span className="text-secondary font-bold cursor-pointer">
              <a href="/login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
