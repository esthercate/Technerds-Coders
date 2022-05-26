import React, {useEffect, useState} from 'react';
import {
  onAuthStateChanged, 
  signInWithEmailAndPassword} from "firebase/auth";
import { auth} from "../../firebase-config/firebase-config";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const nav = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user,setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      nav("/home");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="m-14 h-auto">
      <div className="bg-navbg bg-opacity-70 p-10 m-auto sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-md">
        <h1 className="text-secondary text-center text-xl font-bold">Login</h1>
        <div className="text-center">
          <input
            className="m-4"
            type="email"
            placeholder="Enter your Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="m-4"
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <br />
          <button className="m-4 w-1/2 md:w-1/4 p-4" onClick={login}>
            Login
          </button>
          <p className="opacity-80 p-5 text-sm">
            Don't have an account? Click here to{" "}
            <span className="text-secondary font-bold cursor-pointer">
              <a href="/signup"> Signup</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login