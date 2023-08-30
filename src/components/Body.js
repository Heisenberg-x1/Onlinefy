import React from "react";
import "../Style/Body.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiElectricWhip } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";
import Deals from '../components/Deals';
import Card from "./Card";
// Images
const img1 = require("../images/img1.png");
const img2 = require("../images/img2.png");
const img3 = require("../images/img3.png");
const img4 = require("../images/img4.png");
const img5 = require("../images/img5.png");

const items = [
  { label: "supermarket", icon: AiOutlineShoppingCart },
  { label: "Health and Beauty", icon: RiMentalHealthFill },
  { label: "Appliances", icon: GiElectricWhip },
  { label: "computing", icon: FaComputer },
  { label: "clothes", icon: GiClothes },
  { label: "baby products", icon: LuBaby },
  { label: "gaming", icon: GrGamepad },
];

const SideBarItem = ({ label, icon: Icon }) => (
  <p className="sidebar-item">
    <Icon style={{ fontSize: "1.1em" }} /> {label}
  </p>
);

const SideBar = ({ items }) => (
  <div className="sidebar">
    {items.map((item, index) => (
      <SideBarItem key={index} {...item} />
    ))}
  </div>
);

// side corousel
const SideBarCorousel = () => {
  return (
    <div className="corouselContainer">
      <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

function Body() {
  return (
    <div className="body">
      <SideBar items={items} />
      <SideBarCorousel />
      <Deals />
      {/* <Card /> */}
    </div>
  );
}

export default Body;
