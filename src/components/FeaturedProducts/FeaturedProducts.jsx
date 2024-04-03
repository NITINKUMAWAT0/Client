import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            }
          }
        );
        setData(res.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
      </div>
      <div className="bottom">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          data.map((item) => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
