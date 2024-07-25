import React from 'react';
import Business from './Business';
import '../components_css/businessList.css'


const BusinessList = () => {
    const businesses = [
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