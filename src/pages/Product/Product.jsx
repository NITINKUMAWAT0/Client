import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "./Product.scss";

const Product = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3682693.jpg?format=webp&w=480&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3029557.jpg?format=webp&w=480&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_6854996.jpg?format=webp&w=480&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3029557.jpg?format=webp&w=480&dpr=1.3",
  ];

  const handleQuantityChange = (action) => {
    if (action === "increment" && quantity < 10) {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      {/* Left part */}
      <div className="left">
        <div className="images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setMainImage(index)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={images[mainImage]} alt="" />
        </div>
      </div>

      {/* Right part */}
      <div className="right">
        <div className="about-product">
          <h1>Naruto: Yellow Flash</h1>
          <span>₹ 799</span>
          <p>MRP Rs. 999 incl. of all taxes</p>
          <p>
            Hey Souledsters! You must have noticed that we've said goodbye to
            the little Mr. Souls sleeve label that we've had through the years.
            But always remember, when you shop from our app, website, stores, or
            online marketplaces, you're always getting the genuine real deal!
          </p>
        </div>

        <div className="quantify">
          <button onClick={() => handleQuantityChange("decrement")}>-</button>
          {quantity}
          <button onClick={() => handleQuantityChange("increment")}>+</button>
        </div>
        <div className="buttons">
          <button className="add-to-cart">
            <FaShoppingCart />
            <span> Add to cart</span>
          </button>
          <button className="add-to-wishlist">
            <FaHeart />
            <span> Add to wishlist</span>
          </button>
        </div>
        <hr/>
        <div className="product-details">
          <h2>Product Details</h2>

          <h4>Material & Care:</h4>
          <p>100% Cotton Machine Wash</p>

          <h4>Country of Origin:</h4><p>India (and proud)</p>

          <h4>Manufactured & Sold By:</h4>
          <p>
            The Souled Store Pvt. Ltd. 224, Tantia Jogani Industrial Premises
            J.R. Boricha Marg Lower Parel (E) Mumbai - 11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
