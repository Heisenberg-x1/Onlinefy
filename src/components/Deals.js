import React from "react";

// TODO:Adda progress bar
const productDetails = [
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/9353532/1.jpg?4070",
    name: "Phones and Tablets",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/526178/1.jpg?7493",
    name: "Detergents",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/3625342/1.jpg?4423",
    name: "Computing deals",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/5793022/1.jpg?3143",
    name: "Health and Beauty",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/smart-tvs_260x144.png",
    name: "Smart TVs",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/295531/1.jpg?1832",
    name: "Fashion",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/4842821/1.jpg?9248",
    name: "Refrigerators",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620",
    name: "Mobile accessories",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/0371622/1.jpg?7601",
    name: "Generators",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/554344/1.jpg?4687",
    name: "Men's sneakers",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/watches_300x240.png",
    name: "Watches",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/6502642/1.jpg?0265",
    name: "Gaming",
  },
];
const card = ({image}, {name}) => {
    return(
        <div className="card">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}
function Deals() {
  return <div className="cards">
    {productDetails.map((detail) => {
        return <card image={detail.image} name={detail.name} />;
    })}
  </div>;
}

export default Deals;
