import React from "react";
import Accessories from "./accessories/Accessories";
import Advantages from "./advantages/Advantages";
import BestSeller from "./bestSeller/BestSeller";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Hero from "./header/Hero";
import NewArrivals from "./newArrivals/NewArrivals";

const LandingPage = () => {
   return (
      <>
         <Hero />
         <FeaturedProducts />
         <Accessories />
         <BestSeller />
         <NewArrivals />
         <Advantages />
      </>
   );
};

export default LandingPage;
