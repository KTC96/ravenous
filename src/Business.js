import React from 'react';
const Business = ({ business }) => {
    return (
      <div className="business">
        <div className="image-container">
          <img src={business.image} alt={business.name} />
        </div>
        <h2>{business.name}</h2>
        <div className="business-info">
          <p>{business.address}</p>
          <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
          <p>{business.category}</p>
          <div className="rating">
            <p>{`Rating: ${business.rating} stars`}</p>
            <p>{`Reviews: ${business.reviewCount}`}</p>
          </div>
        </div>
      </div>
    );
  };

export default Business;