import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './Home.css';
import PropertyList from '../../components/propertyList/PropertyList';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className='homeContainer'>
          <Featured />
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList />
      </div>
    </>
  )
}

export default Home