import React from "react";
import style from "./Style/VerifyMobile.module.css";
const WelcomePage = () => {
  return (
    <div className={style.outerDiv}>
      <div className={style.welcomePage}>
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.562vw"
          height="3.362vh"
          viewBox="0 0 30 30"
          fill="none"
          style={{
            background: "#EC5F70E5",
            marginLeft: "14.956vw",
            borderRadius: "60%",
            padding: "0.542vw",
            marginTop: "4.745vh",
            height:"3.656vh"
          }}
        >
          <path
            d="M15.1875 20.625V23.25"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.9375 27.5H21.4375V26.25C21.4375 24.875 20.3125 23.75 18.9375 23.75H11.4375C10.0625 23.75 8.9375 24.875 8.9375 26.25V27.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M7.6875 27.5H22.6875M15 20C10.1625 20 6.25 16.0875 6.25 11.25V7.5C6.25 4.7375 8.4875 2.5 11.25 2.5H18.75C21.5125 2.5 23.75 4.7375 23.75 7.5V11.25C23.75 16.0875 19.8375 20 15 20Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.83828 14.5625C5.90078 14.2625 5.07578 13.7125 4.42578 13.0625C3.30078 11.8125 2.55078 10.3125 2.55078 8.5625C2.55078 6.8125 3.92578 5.4375 5.67578 5.4375H6.48828C6.23828 6.0125 6.11328 6.65 6.11328 7.3125V11.0625C6.11328 12.3125 6.37578 13.4875 6.83828 14.5625ZM23.1633 14.5625C24.1008 14.2625 24.9258 13.7125 25.5758 13.0625C26.7008 11.8125 27.4508 10.3125 27.4508 8.5625C27.4508 6.8125 26.0758 5.4375 24.3258 5.4375H23.5133C23.7633 6.0125 23.8883 6.65 23.8883 7.3125V11.0625C23.8883 12.3125 23.6258 13.4875 23.1633 14.5625Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1>Congratulation!</h1>
        <h2>You Account has been Verified with Rablo.</h2>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default WelcomePage;
