import React from "react";
import Style from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div id="home" className={Style.homeBanner}>
        <div className={Style.homeContent}>
          <h2>
            <span className={Style.welcome}>Welcome</span>
            Pencil Picking Jobs Work From Home
          </h2>
          <h2 style={{ marginTop: "1rem" }}>
            घर से काम करें। पेंसिल और पेन पैकिंग जॉब के लिए संपर्क करें।
          </h2>
          <div className={Style.headerButton}>
            {/* <div>
            <a href="tel:919876543210" target="_blank">
              9876543210
            </a>
          </div> */}
            <a href="tel:919876543210" target="_blank">
              <button type="button">Call Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
