import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-3/4 px-10 py-10 bg-hero-image bg-cover bg-center bg-no-repeat bg-local w-full">
        <div className="hero-content w-5/6 md:w-2/5 mx-8 flex flex-col">
          <h1 className="text-3xl py-3">
            A smarter way to step up your coding game!
          </h1>
          <p className="text-lg my-3">
            Strengthen your developer profile as you code and compete in
            programming contests with friends, schoolmates and like-minded
            enthusiasts, all in one place.
          </p>
        </div>
        <div className="mx-4">
          <button className="p-4 m-5">Upcoming Contest</button>
          <button className="p-4 m-5">Create Contest</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
