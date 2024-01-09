import Image from "next/image";
import React from "react";
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/6.jpg";
import Image3 from "../../images/4.jpeg";
import Style from "./Pencil.module.css";

const Pencil = () => {
  return (
    <div className={Style.pencil}>
      <div className={Style.images}>
        <div>
          <Image src={Image1} className={Style.pencilImage} />
        </div>
        <div>
          <p>Pen Packing</p>
          <p>Packing Profit 1 Box = 6 ₹</p>
        </div>
      </div>
      <div className={Style.images}>
        <div>
          <Image src={Image2} className={Style.pencilImage} />
        </div>
        <div>
          <p>Pencil Packing</p>
          <p>Packing Profit 1 Box = 12 ₹</p>
        </div>
      </div>
      <div className={Style.images}>
        <div>
          <Image src={Image3} className={Style.pencilImage} />
        </div>
        <div>
          <p>Sharpeners Packing</p>
          <p>Packing Profit 1 Box = 12 ₹</p>
        </div>
      </div>
    </div>
  );
};

export default Pencil;
