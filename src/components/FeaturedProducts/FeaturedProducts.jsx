import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      title: "Spider-Man: The Hanged Man",
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711180387_3878384.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711180387_8376898.jpg?format=webp&w=480&dpr=1.3",
      isnew: true,
      oldprice: "₹ 999",
      price: "₹ 799",
    },
    {
      id: 2,
      title: "TSS Original: God Of Death",
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711186054_1884723.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711186054_2211944.jpg?format=webp&w=480&dpr=1.3",
      isnew: true,
      oldprice: "₹ 999",
      price: "₹ 799",
    },
    {
      id: 3,
      title: "Dungeons & Dragons",
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710328305_3872574.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710328305_9728391.jpg?format=webp&w=480&dpr=1.3",
      isnew: true,
      oldprice: "₹ 999",
      price: "₹ 799",
    },
    {
      id: 4,
      title: "Harry Potter: Death Eater",
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690348765_9479319.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690348765_3246618.jpg?format=webp&w=480&dpr=1.3",
      isnew: true,
      oldprice: "₹ 999",
      price: "₹ 799",
    },
    {
      id: 5,
      title: "Kung Fu Panda: Warrior Business",
      img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710829195_2469715.jpg?format=webp&w=480&dpr=1.3",
      img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710567947_3761034.jpg?format=webp&w=480&dpr=1.3",
      isnew: true,
      oldprice: "₹ 999",
      price: "₹ 799",
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
