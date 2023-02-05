import React from 'react';
// import Header from '../partials/Header';
import HeroHome from '../componenets/HeroHome';
// import FeaturesHome from '../partials/Features';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
// import Footer from '../partials/Footer';
// import Banner from '../partials/Banner';

const MedChainLandingPage = () => {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        {/* <Header /> */}
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroHome />
 
  
        </main>

  
      </div>
    );
  }

export default MedChainLandingPage;
