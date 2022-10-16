import React from "react";
import "./footer.scss";

import logo from "../../../Logo.png";
import {
   Facebook,
   Instagram,
   RightArrow,
   Twitter,
} from "../../../components/icons/Icons";

const Footer = () => {
   return (
      <section className="footer">
         <div className="footer__main">
            <div className="footer__main--child">
               <img src={logo} alt="logo" />

               <p>Our shop is the best choice for buying footwear.</p>

               <div className="footer__main--child--social-links">
                  <Twitter />
                  <Facebook />
                  <Instagram />
               </div>
            </div>

            <div className="footer__main--child">
               <h4>Home</h4>

               <ul>
                  <li>Support Center</li>
                  <li>Customer Support</li>
                  <li>Copyright</li>
                  <li>Popular Campaign</li>
               </ul>
            </div>

            <div className="footer__main--child">
               <h4>Our Information</h4>

               <ul>
                  <li>Return Policy</li>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Site Map</li>
                  <li>Store Hours</li>
               </ul>
            </div>

            <div className="footer__main--child">
               <h4>My Account</h4>

               <ul>
                  <li>Press Inquiries</li>
                  <li>Social Media Directories</li>
                  <li>Permission</li>
                  <li>Requests</li>
               </ul>
            </div>
         </div>

         <div className="footer__submain">
            <p className="footer__submain--copyright">
               © 2021 Shop. Made with love for Brightscout
            </p>

            <div className="footer__submain--move-to-top">
               <a href="#hero">
                  <RightArrow />
               </a>
            </div>
         </div>
      </section>
   );
};

export default Footer;
