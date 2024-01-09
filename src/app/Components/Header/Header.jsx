import React from "react";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={Style.header}>
        <div className={Style.headerLogo}>
          <p>
            Pencil Packing 
          </p>
            <span> Job. </span>
        </div>
        <div className={Style.headerButton}>
          {/* <div>
            <a href="tel:919876543210" target="_blank">
              9876543210
            </a>
          </div> */}
          <a href="https://wa.me/917605881452" target="_blank">
            <button type="button">Apply Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
