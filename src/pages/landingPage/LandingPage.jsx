import React from "react";
import Accessories from "./accessories/Accessories";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Hero from "./header/Hero";

const LandingPage = () => {
   return (
      <>
         <Hero />
         <FeaturedProducts />
         <Accessories />
      </>
   );
};

export default LandingPage;
