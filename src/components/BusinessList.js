import React from 'react';
import Business from './Business';
import '../components_css/businessList.css';

const BusinessList = ({ businesses }) => {
  return (
    <div>
      {businesses.map(business => 
        <Business business={business} />
      )}
    </div>
  );
};

export default BusinessList;