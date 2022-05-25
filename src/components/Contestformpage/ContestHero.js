import React, { useState } from "react";

const ContestHero = ({ onAddNewContest }) => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    start_time: "",
    end_time: "",
    duration: "",
    site: "",
    in_24_hours: "",
    status: "",
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
    onAddNewContest(formData);
  }

  return (
    <>
      <div className="md:flex px-3 py-16 bg-contestHero-bg bg-cover bg-right bg-no-repeat bg-local w-full h-auto">
        <div className="w-0 md:w-1/3"></div>
        <div className="h-auto w-4/5 md:w-2/3 bg-navbg bg-opacity-70 rounded-md mx-14">
          <h4 className="text-xl text-center text-secondary p-8">
            Create Contest
          </h4>
          <form className="mx-3 md:mx-16 pb-3" onSubmit={handleSubmit}>
            <input
              className="mb-5 w-full"
              type="text"
              id="name"
              value={formData.name}
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
              <input
                className="mb-5 mr-2"
                type="datetime-local"
                id="start_time"
                value={formData.start_time}
                onChange={handleChange}
                placeholder="Start Time"
              />
              <input
                className="mb-5 ml-2"
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
              id="site"
              value={formData.site}
              onChange={handleChange}
              placeholder="Hosting Website"
            />
            <div className="flex">
              <input
                className="mb-5 mr-2"
                type="text"
                id="in_24_hours"
                value={formData.in_24_hours}
                onChange={handleChange}
                placeholder="In_24_Hours: Yes/No"
              />
              <input
                className="mb-5 ml-2"
                type="text"
                id="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status: Coding/Before"
              />
            </div>
            <button className="w-1/2 md:w-1/4 p-5 mt-5">Post Contest</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContestHero;
