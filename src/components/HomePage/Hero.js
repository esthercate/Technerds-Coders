import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-3/4 p-10 md:p-28 bg-hero-image bg-cover justify-center bg-center bg-no-repeat bg-local w-full text-center">
        <div className="hero-content m-auto md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl text-center font-semibold">
            A smarter way to step up your coding game!
          </h1>
          <p className="text-lg m-5 md:px-10">
            Strengthen your coding skills as you code and compete in programming
            contests with like-minded enthusiasts, all in one place.
          </p>
        </div>
        <div className="mx-4">
          <button className="p-4 md:px-2 m-5">
            <a href="/contestform">Create Contest</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
