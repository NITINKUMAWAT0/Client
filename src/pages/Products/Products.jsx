import React, { useState } from "react";
import "./Products.scss";
import Lists from "../../components/Lists/Lists";
import { useParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const { data, loading, error } = useFetch(
    `/sub-categories?[filter][categories][id][$eq]=${catId}`
  );
  return (
    <div className="products">
      {/*left*/}
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItems" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id} className="abcd">
                {item.attribute?.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="asc">Price (Highest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="desc">Price (Lowest first)</label>
          </div>
        </div>
      </div>

      {/*right*/}
      <div className="right">
        <img
          className="catImg"
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320240427114256.jpg?format=webp&w=1500&dpr=1.3"
          alt=""
        />
        <Lists catId={catId} maxPrice={maxPrice} sort={sort} SubCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;