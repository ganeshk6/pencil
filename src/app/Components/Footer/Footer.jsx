import React from "react";
import Style from "./Footer.module.css";
import { MdCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className={Style.Footer}>
        <div className={Style.footerContactDetails}>
          <div>
            <p>Contact us:-</p>
          </div>
          <div className={Style.footerAddress}>
            <div className={Style.link}>
              <a href="tel:919876543210" target="_blank">
                <p>
                  <span>
                    <MdCall />
                  </span>
                  +91 1234567890
                </p>
              </a>
            </div>
            <div className={Style.link}>
              <a href="https://wa.me/917605881452" target="_blank">
                <p>
                  <span>
                    <SiGmail />
                  </span>
                  info@penciljobpacking.com
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className={Style.address}>
          <p>
            <span>
              <IoHome />
            </span>
            702 Western Express Highway, Sir Mathuradas Vasanji Rd, Juction,
            Mumbai, Maharashtra, 400069
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
