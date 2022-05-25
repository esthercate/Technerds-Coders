import React, {useEffect, useState} from "react";
import "../App.css";
import NavBar from "./NavBar";

const App = () => {

  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/at_coder")
      .then((res) => res.json())
      .then((contestsData) => setContests(contestsData));
  }, []);

  function handleNewContest(formData){
    setContests([
      formData,
      ...contests
    ])
  }

  return (
    <div>
      <NavBar contests={contests} onAddNewContest={handleNewContest} />
    </div>
  );
};

export default App;
