import React from 'react';
import ContestHero from './ContestHero';
import MyContests from './MyContests';
import Footer from "../Footer";


const ContestForm = () => {
  return (
    <div>
      <ContestHero />
      <MyContests />
      <Footer />
    </div>
  );
};

export default ContestForm