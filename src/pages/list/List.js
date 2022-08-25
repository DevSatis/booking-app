import React, { useState } from 'react';
import './List.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import {useLocation} from 'react-router-dom';
import { format } from 'date-fns';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <lebel>Destination</lebel>
              <input type='text' placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <lebel>Check in date</lebel>
              <span>{`
                ${format(date[0].startDate, "MM/dd/yyyy")} to
                ${format(date[0].endDate, "MM/dd/yyyy")}`

              }</span>
              <input type='text' />
            </div>
          </div>
          <div className='listResult'></div>
        </div>
      </div>
    </div>
    
  )
}

export default List