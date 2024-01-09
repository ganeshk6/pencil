import React from "react";
import Style from "./Feature.module.css";
import { FaPencilAlt } from "react-icons/fa";

const Feature = () => {
  return (
    <div className={Style.Features}>
      <div>

      <h1>Features</h1>
      </div>
      <div className={Style.featureCard}>
      <div className={Style.featureImage}>
        <div>
          <FaPencilAlt />
        </div>
        <div className={Style.cardHeading}>
          <h3>Pencil Packing Job</h3>
          <p>10 Pencil = 1 Box</p>
          <p>Packing Profit 1 Box = 6 ₹</p>
        </div>
        <div className={Style.featureButton}>
          <button type="button">Apply Now</button>
        </div>
      </div>
      <div className={Style.featureImage2}>
        <div>
          <FaPencilAlt />
        </div>
        <div className={Style.cardHeading}>
          <h3>Pencil Eraser Packing Job ₹</h3>
          <p>20 Pencil Eraser = 1 Box</p>
          <p>Packing Profit 1 Box = 12</p>
        </div>
        <div className={Style.featureButton}>
          <button type="button">Call Now</button>
        </div>
      </div>
      <div className={Style.featureImage}>
        <div>
          <FaPencilAlt />
        </div>
        <div className={Style.cardHeading}>
          <h3>Pen Packing Job</h3>
          <p>5 Pen = 1 Box</p>
          <p>Packing Profit 1 Box = 3 ₹</p>
        </div>
        <div className={Style.featureButton}>
          <button type="button">Apply Now</button>
        </div>
      </div>
      <div className={Style.featureImage2}>
        <div>
          <FaPencilAlt />
        </div>
        <div className={Style.cardHeading}>
          <h3>Pencil Sharpeners Packing Job</h3>
          <p>20 Pencil Sharpeners = 1 Box</p>
          <p>Packing Profit 1 Box = 12</p>
        </div>
        <div className={Style.featureButton}>
          <button type="button">Call Now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Feature;
