import React from "react";
import Accessories from "./accessories/Accessories";
import BestSeller from "./bestSeller/BestSeller";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Hero from "./header/Hero";

const LandingPage = () => {
   return (
      <>
         <Hero />
         <FeaturedProducts />
         <Accessories />
         <BestSeller />
      </>
   );
};

export default LandingPage;
