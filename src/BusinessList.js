import React from 'react';
import Business from './Business';
const BusinessList = () => {
    const businesses = [
      {
        image: 'https://americadomani.com/wp-content/uploads/2023/05/trattoria.fi_.jpg',
        name: 'Restaurant One',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipcode: '90210',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
      },
      {
        image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
        name: 'Restaurant Two',
        address: '456 Side St',
        city: 'Othertown',
        state: 'TX',
        zipcode: '75001',
        category: 'Mexican',
        rating: 4.0,
        reviewCount: 85
      }
    ];
  
    return (
      <div className="business-list">
        {businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div>
    );
  };
  
export default BusinessList;