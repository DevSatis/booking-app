import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Orange Pai</span>
        <span className="fpCity">Noida</span>
        <span className="fpPrice">Starting from 1500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from 10000</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Obrai Hotels</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from 8000</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1559741033-d85618ce7e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Satish Hotels</span>
        <span className="fpCity">Bangalore</span>
        <span className="fpPrice">Starting from 150000</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
