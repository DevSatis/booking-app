import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>2331 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1611771341253-dadb347165a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>025 Villa</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWx8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>330 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>209 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 Cabins</h2>
        </div>
      </div>
      
    </div>
  );
};

export default PropertyList;
