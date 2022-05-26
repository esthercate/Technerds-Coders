import React from 'react';
import Hero from './Hero';
import ContestList from './ContestList';
import NextPage from './NextPage';
import Footer from '../Footer';

const Home = ({ contests, onSearchChange,isSignedUp }) => {

  return (
    <div>
      <Hero />
      <ContestList contests={contests} onSearchChange={onSearchChange} />
      <NextPage />
      <Footer />
    </div>
  );
};

export default Home