import React from "react";
import "./Cart.scss";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3682693.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3029557.jpg?format=webp&w=480&dpr=1.3",
      title: "Naruto: Yellow Flash",
      oldprice: "₹ 999",
      price: "₹ 799",
    },
    {
      id: 2,
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711445834_7512840.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711445834_5393883.jpg?format=webp&w=480&dpr=1.3",
      title: "Naruto: Drunken Fist",
      oldprice: "₹ 999",
      price: "₹ 799",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <div className="title-trash">
              <h1>{item.title}</h1>
              <FaTrash className="delete" size={16}/>
            </div>
            <div className="price">1 x {item.price}</div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUB-TOTAL</span>
        <span>₹ 1598</span>
      </div>
      <div className="">
      <button>Checkout</button>
      <span className="reset">Reset Cart</span>
      </div>
    </div>
  );
};

export default Cart;
