import React from "react";
import Accessories from "./accessories/Accessories";
import Advantages from "./advantages/Advantages";
import BestSeller from "./bestSeller/BestSeller";
import Categories from "./categories/Categories";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Footer from "./footer/Footer";
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
         <Categories />
         <Footer/>
      </>
   );
};

export default LandingPage;
