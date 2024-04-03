import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const imageUrl = item.attributes?.img?.data?.attributes?.url;
  const mainImgSrc = imageUrl
    ? process.env.REACT_APP_UPLOAD_URL + imageUrl
    : "";

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={mainImgSrc} alt="" className="mainImg" />

          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>₹ {item?.attributes.price + 500}</h3>
          <h3>₹ {item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
