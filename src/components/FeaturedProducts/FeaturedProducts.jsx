import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
      </div>
      <div className="bottom">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data && data.length > 0 ? (
          data.map((item, index) => (
            <Card item={item} key={index} />
          ))
        ) : (
          <p>No {type} products found.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
