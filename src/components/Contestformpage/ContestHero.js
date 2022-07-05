import React, { useState } from "react";

const ContestHero = ({ onAddNewContest }) => {
  const [formData, setFormData] = useState({
    contest_name: "",
    url: "",
    start_time: "",
    end_time: "",
    duration: "",
    hosting_website: "",
  });

  

  function handleChange(event) {
    const key = event.target.id;

    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://technerds-db.herokuapp.com/contests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onAddNewContest(data));
  }  


  return (
    <>
      <div className="md:flex px-3 py-16 bg-contestHero-bg bg-cover bg-right bg-no-repeat bg-local w-full h-auto">
        <div className="w-0 md:w-1/3"></div>
        <div className="h-auto w-4/5 md:w-2/3 bg-navbg bg-opacity-70 rounded-md mx-14">
          <h4 className="text-xl text-center text-secondary p-8 font-bold">
            Create Contest
          </h4>
          <form className="mx-3 md:mx-16 pb-3" onSubmit={handleSubmit}>
            <input
              className="mb-5 w-full"
              type="text"
              id="contest_name"
              value={formData.contest_name}
              onChange={handleChange}
              placeholder="Contest Name"
            />
            <input
              className="mb-5 w-full"
              type="text"
              id="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Contest URL"
            />
            <div className="flex">
             <br/>
              <input
                className="mb-5 mr-2 opacity-70"
                type="datetime-local"
                id="start_time"
                value={formData.start_time}
                onChange={handleChange}
                placeholder="Start Time"
              />
              <input
                className="mb-5 ml-2 opacity-70"
                type="datetime-local"
                id="end_time"
                value={formData.end_time}
                onChange={handleChange}
                placeholder="End Time"
              />
            </div>
            <input
              className="mb-5 w-full"
              type="text"
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration"
            />
            <input
              className="mb-5 w-full"
              type="text"
              id="hosting_website"
              value={formData.hosting_website}
              onChange={handleChange}
              placeholder="Hosting Website"
            />
            
            <button className="w-1/2 md:w-1/4 p-5 mt-5">Post Contest</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContestHero;
