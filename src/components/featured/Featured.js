import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1611616910032-b63f95736a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1563396984197-4741699a9415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1535068484622-7a077e5aa558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1611616910032-b63f95736a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured;