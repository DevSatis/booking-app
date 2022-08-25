import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './Home.css';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featured/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className='homeContainer'>
          <Featured />
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList />
          <h1 className='homeTitle'>Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />

      </div>
    </>
  )
}

export default Home