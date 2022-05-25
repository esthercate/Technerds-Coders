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

  return (
    <div>
      <NavBar contests={contests} />
    </div>
  );
};

export default App;
