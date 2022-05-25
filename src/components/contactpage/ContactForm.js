import React from "react";

const ContactForm = () => {
  return (
    <div className="m-14 h-auto">
      <div className="bg-navbg bg-opacity-70 p-10 m-auto sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-md">
        <h1 className="text-secondary text-center text-xl font-bold">Get in Touch!</h1>
        <form className="text-center">
          <input className="m-4" type="text" placeholder="Enter your Name" />
          <input className="m-4" type="email" placeholder="Enter your Email" />
          <br />
          <textarea className="m-4" placeholder="Enter your Message"></textarea>
          <br />
          <button className="m-4 w-1/2 md:w-1/4 p-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
