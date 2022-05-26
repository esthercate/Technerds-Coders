import React from 'react';
import Hero from './Hero';
import ContestList from './ContestList';
import NextPage from './NextPage';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Home = ({contests, isSignedIn}) => {
  const nav = useNavigate();
  !isSignedIn ? nav("/signup") : nav("/")

  return (
    <div>
      <Hero />
      <ContestList contests={contests} />
      <NextPage />
      <Footer />
    </div>
  );
};

export default Home