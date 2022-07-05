import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [myContests, setMyContests] = useState([]);

  useEffect(() => {
    fetch("https://technerds-db.herokuapp.com/contests")
      .then((res) => res.json())
      .then((contestsData) => {
        setMyContests(contestsData);
        console.log(contestsData);
      });
  }, []);

  function handleDelete(id) {
    fetch(`https://technerds-db.herokuapp.com/contests/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedContest) => deletedContest)
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <h1 className="text-secondary pt-6 text-xl font-bold text-center">
        My Contests
      </h1>
      <div className="h-screen p-6 md:flex">
        {myContests.map((contest) => (
          <div
            key={contest.id}
            className="card w-full md:w-2/6 h-auto md:h-3/5 md:m-2 md-pb-5 bg-navbg rounded-md mt-3"
          >
            <div className="card-header bg-orange font-semibold p-5 border-secondary border-b-2">
              <h1>{contest.contest_name}</h1>
            </div>
            <div className="card-body p-5">
              <p className="m-2">
                Date:
                <span className="opacity-80 ml-12">
                  {contest.start_time.slice(0, 10)} -{" "}
                  {contest.end_time.slice(0, 10)}
                </span>
              </p>
              <p className="m-2">
                Time:
                <span className="opacity-80 ml-12">
                  {contest.start_time.slice(11, 16)} -{" "}
                  {contest.end_time.slice(11, 16)}
                </span>{" "}
              </p>
              <p className="m-2">
                Duration:
                <span className="opacity-80 ml-12">
                  {contest.duration} Hours
                </span>{" "}
              </p>
              <p className="m-2">
                Website:
                <span className="opacity-80 ml-12">
                  {contest.hosting_website}
                </span>{" "}
              </p>
              <p className="m-2">Url: </p>
              <span className="opacity-80 ml-2">{contest.url}</span>{" "}
            </div>
            <div className="card-footer p-5 m-2">
              <button
                onClick={() => handleDelete(contest.id)}
                className="w-1/3 p-3 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
