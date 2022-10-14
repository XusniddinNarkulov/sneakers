import React from "react";
import "./hero.scss";

import heroImg from "./img/heroImg.avif";
import notificationImg from "./img/notificationImg.png";

const Hero = () => {
   return (
      <section className="hero">
         <div className="hero__left">
            <h1 className="hero__left--title">Get Your Awesome Sneakers.</h1>

            <p className="hero__left--body-text">
               We offer the best deals in our shop. Check them out now. We have
               awesome stuff on sale for you.
            </p>

            <div className="hero__left--shop-now">
               <button className="btn">Shop Now</button>

               <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M20.84 3.60987C20.3292 3.09888 19.7228 2.69352 19.0554 2.41696C18.3879 2.14039 17.6725 1.99805 16.95 1.99805C16.2275 1.99805 15.5121 2.14039 14.8446 2.41696C14.1772 2.69352 13.5708 3.09888 13.06 3.60987L12 4.66987L10.94 3.60987C9.9083 2.57818 8.50903 1.99858 7.05 1.99858C5.59096 1.99858 4.19169 2.57818 3.16 3.60987C2.1283 4.64156 1.54871 6.04084 1.54871 7.49987C1.54871 8.95891 2.1283 10.3582 3.16 11.3899L4.22 12.4499L12 20.2299L19.78 12.4499L20.84 11.3899C21.351 10.8791 21.7563 10.2727 22.0329 9.60523C22.3095 8.93777 22.4518 8.22236 22.4518 7.49987C22.4518 6.77738 22.3095 6.06198 22.0329 5.39452C21.7563 4.72706 21.351 4.12063 20.84 3.60987V3.60987Z"
                     stroke="#FF3C78"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </div>

            <div className="hero__left--free">
               <div className="hero__left--free--child">
                  <svg
                     width="28"
                     height="28"
                     viewBox="0 0 28 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="14" cy="14" r="14" fill="#02BE83" />
                     <path
                        d="M21.6666 9L12.5 18.1667L8.33331 14"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <p className="grey">Free shipping</p>
               </div>

               <div className="hero__left--free--child">
                  <svg
                     width="28"
                     height="28"
                     viewBox="0 0 28 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="14" cy="14" r="14" fill="#02BE83" />
                     <path
                        d="M21.6666 9L12.5 18.1667L8.33331 14"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <p>Free returns</p>
               </div>
            </div>
         </div>

         <div className="hero__right">
            <div className="hero__right--img">
               <img src={heroImg} alt="sneaker" />

               <div className="hero__right--img--notification">
                  <div className="hero__right--img--notification--flex">
                     <img src={notificationImg} alt="notification img" />

                     <div className="hero__right--img--notification--flex--text">
                        <b>Joan</b> has just purchased these sneakers now.
                     </div>

                     <div className="hero__right--img--notification--flex--lock-icon">
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M12.6667 7.33325H3.33333C2.59695 7.33325 2 7.93021 2 8.66659V13.3333C2 14.0696 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0696 14 13.3333V8.66659C14 7.93021 13.403 7.33325 12.6667 7.33325Z"
                              stroke="#315BFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M4.66666 7.33325V4.66658C4.66666 3.78253 5.01785 2.93468 5.64297 2.30956C6.26809 1.68444 7.11593 1.33325 7.99999 1.33325C8.88404 1.33325 9.73189 1.68444 10.357 2.30956C10.9821 2.93468 11.3333 3.78253 11.3333 4.66658V7.33325"
                              stroke="#315BFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>

            <div className="hero__right--arrows">
               <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 19.9999C36.6667 10.7952 29.2048 3.33325 20 3.33325C10.7953 3.33325 3.33334 10.7952 3.33334 19.9999C3.33334 29.2047 10.7953 36.6666 20 36.6666Z"
                     stroke="#C1C0C0"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M20 13.3333L13.3333 19.9999L20 26.6666"
                     stroke="#C1C0C0"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M26.6667 20H13.3333"
                     stroke="#C1C0C0"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>

               <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M20 36.6666C10.7953 36.6666 3.33334 29.2047 3.33334 19.9999C3.33334 10.7952 10.7953 3.33325 20 3.33325C29.2048 3.33325 36.6667 10.7952 36.6667 19.9999C36.6667 29.2047 29.2048 36.6666 20 36.6666Z"
                     stroke="#315BFF"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M20 13.3333L26.6667 19.9999L20 26.6666"
                     stroke="#315BFF"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M13.3333 20H26.6667"
                     stroke="#315BFF"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </div>
         </div>
      </section>
   );
};

export default Hero;
