import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className='homeContainer'>
          <Featured />
      </div>
    </>
  )
}

export default Home