import React from 'react';
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src = "https://images.unsplash.com/photo-1432634372475-07b399e372ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt='Image pic'
      className='siImg'/>
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartment</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free Airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire Studio . 1 bathroom . 21m^2 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great place today!
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>$123</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>

    </div>
  )
}

export default SearchItem