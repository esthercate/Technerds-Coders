import React from 'react'

const MyContests = () => {
  return (
    <div className="m-8 h-auto">
      <h2 className="text-center text-secondary">My Contests</h2>
      <div className="md:flex">
        <div className="card m-8 p-8 bg-navbg bg-opacity-70 rounded-md md:w-1/2">
          <div className="card-header pb-5">
            <h1>Contest Name</h1>
          </div>
          <div className="card-body pb-5 opacity-70">
            <p>Contest URL</p>
            <p>Start_Time</p>
            <p>End_Time</p>
            <p>Duration</p>
            <p>Hosting Website</p>
            <p>In_24_hours</p>
            <p>Status</p>
          </div>
          <div className="footer pb-5">
            <button className="mr-5 p-4">Edit</button>
            <button className="p-4">Delete</button>
          </div>
        </div>

        <div className="card m-8 p-8 bg-navbg bg-opacity-70 rounded-md md:w-1/2">
          <div className="card-header pb-5">
            <h1>Contest Name</h1>
          </div>
          <div className="card-body pb-5 opacity-70">
            <p>Contest URL</p>
            <p>Start_Time</p>
            <p>End_Time</p>
            <p>Duration</p>
            <p>Hosting Website</p>
            <p>In_24_hours</p>
            <p>Status</p>
          </div>
          <div className="footer pb-5">
            <button className="mr-5 p-4">Edit</button>
            <button className="p-4">Delete</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MyContests