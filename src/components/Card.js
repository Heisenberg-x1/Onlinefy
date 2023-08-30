import React from "react";
import { useState, useEffect } from "react";
import "../Style/Card.css";

const ItemCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <div className="price">
        <p style={{ color: "green" }}>{props.price}$ &nbsp; </p>
        <p style={{background: "green", padding: "0 5px", borderRadius:"4px", fontSize: "0.8em"}}>{props.off}% off</p>
      </div>
    </div>
  );
};

function Card() {
  const [state, setState] = useState({
    list: [],
    isLoaded: false,
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState({ list: data, isLoaded: true });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="card-container">
      {state.list.map((item) => {
        return (
          <div key={item.id} className="card-wrapper">
            <ItemCard
              img={item.image}
              title={item.title}
              price={item.price}
              off={Math.floor(Math.random() * (20 - 5 + 1)) + 5}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
