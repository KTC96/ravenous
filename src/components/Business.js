import React from 'react';
const Business = ({ business }) => {
    return (
      <div className="business">
        <div className="image-container">
          <img src={business.image} alt={business.name} />
        </div>
        
        <div className="business-info">
          <div class="address">
          <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipcode}`}</p>
          </div>
          <div class="additional-info">
            <p id="category"><strong>{business.category}</strong></p>
            <div className="rating">
              <p><strong>{business.rating} stars</strong></p>
              <p>{`${business.reviewCount} reviews`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Business;