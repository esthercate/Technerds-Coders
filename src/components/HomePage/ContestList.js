import React from "react";
import codeforcelogo from "../../assets/Codeforces.png";
import topcoderlogo from "../../assets/Topcoder.png";
import leetcodelogo from "../../assets/Leetcode.png";
import hackerranklogo from "../../assets/Hackerrank.png";

const ContestList = ({ contests }) => {
  return (
    <div className="mt-10">
      {/* Search bar form */}
      <div className="md:flex justify-between ml-12 mb-7">
        <div>
          <h2 className="text-2xl font-bold m-6">Events & Contests</h2>
        </div>
        <div className="w-full md:w-1/2 mr-10">
          <form className="flex mr-6">
            <input
              className="ml-6 bg-white border-2 rounded-md w-full border-white"
              type="search"
              placeholder="Search by Name..."
            />
            <button>@</button>
          </form>
        </div>
      </div>

      <div className="md:flex justify-items-center w-full">
        {/* Contest listing section */}

        <div className="w-full">
          {contests.map((contest) => (
            <div key={contest.id} className="bg-navbg bg-opacity-30 mx-10 md:mx-20 my-3 md:flex rounded-md p-1 md:p-6">
              <div className="date w-full md:w-1/6 md:border-r-2 border-secondary p-8">
                <h3 className="opacity-90 font-bold">
                {contest.start_time.slice(0,10)}
                </h3>
              </div>
              <div className="info w-3/4 ml-5 p-2">
                <h2 className="uppercase font-bold pb-2 opacity-90">
                  {contest.name}
                </h2>
                <h5 className="pb-2 opacity-80">
                  {contest.start_time.slice(11,16)} - {contest.end_time.slice(11,16)}
                </h5>
                <p className="pb-2 opacity-80">
                  Duration: {contest.duration/60} Minutes
                </p>
                <p className="opacity-80">
                  Host: AtCoder
                </p>
                <p className="opacity-80 text-secondary">
                  In_24_Hours: {contest.in_24_hours}{" "}
                  <span className="ml-6">Status: {contest.status}</span>
                </p>
              </div>
              <div className="p-4">
                <button className="w-36 p-5">
                  <a href={contest.url} target="_blank" rel="noreferrer">
                    Join Contest
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contests hosting sites */}

        <div className="w-1/4 mr-10">
          <div>
            <h3 className="text-secondary opacity-90 text-center text-lg">
              Top Contest Hosting Sites
            </h3>
          </div>

          <div className="text-center">
            <div className="m-5">
              <img
                className="w-full h-32 rounded-md"
                src={codeforcelogo}
                alt="CodeForces Logo"
              />
              <h2>CODEFORCES</h2>
            </div>
            <div className="m-5">
              <img
                className="w-full h-40 md:h-32 rounded-md"
                src={topcoderlogo}
                alt="TopCoder Logo"
              />
              <h2>TOPCODER</h2>
            </div>
            <div className="m-5">
              <img
                className="w-full h-32 rounded-md"
                src={leetcodelogo}
                alt="LeetCode Logo"
              />
              <h2>LEETCODE</h2>
            </div>
            <div className="m-5">
              <img
                className="w-full h-32 rounded-md"
                src={hackerranklogo}
                alt="HackerRank Logo"
              />
              <h2>HACKERRANK</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestList;
