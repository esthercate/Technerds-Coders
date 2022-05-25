import React, {useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { auth} from "../../firebase-config/firebase-config";

const Login = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user,setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  
  const register = async () => {
    try {
      const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth)
  };

  return (
    <div className="m-14 h-auto flex">
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
            Dont have an account? Click here to{" "}
            <span className="text-secondary">Signup</span>
          </p>
          <button onClick={logout}>signOut</button>
        </div>
        <h1>Im logged in: {user?.email}</h1>
      </div>

      <div className="bg-navbg bg-opacity-70 p-10 m-auto sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-md ml-4">
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
          <button className="m-4 w-1/2 md:w-1/4 p-4">Login</button>
          <p className="opacity-80 p-5 text-sm">
            Dont have an account? Click here to{" "}
            <span className="text-secondary" onClick={login}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login