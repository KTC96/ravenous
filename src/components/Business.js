import React from 'react';

const Business = (props) => {
    return (
      <div className="business">
        <div className="image-container">
          <img src={props.business.image} alt={props.business.name} />
        </div>
        
        <div className="business-info">
          <div class="address">
          <h2>{props.business.name}</h2>
            <p>{props.business.address}</p>
            <p>{props.business.city}</p>
            <p>{`${props.business.state} ${props.business.zipcode}`}</p>
          </div>
          <div class="additional-info">
            <p id="category"><strong>{props.business.category}</strong></p>
            <div className="rating">
              <p><strong>{props.business.rating} stars</strong></p>
              <p>{`${props.business.reviewCount} reviews`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Business;