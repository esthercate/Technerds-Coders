import React from 'react';
import ContestHero from './ContestHero';
import Footer from "../Footer";


const ContestForm = ({ onAddNewContest }) => {
  return (
    <div>
      <ContestHero onAddNewContest={onAddNewContest} />
      <Footer />
    </div>
  );
};

export default ContestForm