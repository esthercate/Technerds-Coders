import React from 'react';

const Login = () => {
  return (
    <div className="m-14 h-auto">
      <div className="bg-navbg bg-opacity-70 p-10 m-auto sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-md">
        <h1 className="text-secondary text-center text-xl font-bold">Login</h1>
        <form className="text-center">
          <input className="m-4" type="email" placeholder="Enter your Email" />
          <input className="m-4" type="password" placeholder="Enter Password" />
          <br />
          <button className="m-4 w-1/2 md:w-1/4 p-4">Login</button>
          <p className='opacity-80 p-5 text-sm'>Dont have an account? Click here to <span className='text-secondary'>Signup</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login