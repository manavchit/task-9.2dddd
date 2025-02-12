import './App.css';
import React from 'react';
import PricingPlans from './PricingPlans';
import Header  from './Header';

function PlansPage(){
  return (
    <div className="PostPage">
      <Header />
      <PricingPlans />
    </div>
  );
}

export default PlansPage;