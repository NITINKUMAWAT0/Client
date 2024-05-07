import React from "react";
import "./Lists.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

const Lists = ({ subCats = [], maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filter][categories][id]=${catId}${subCats.map(
      (item) => `&[filter][categories][id][$eq]=${item}`
    )}&[filter][price][&lte]=${maxPrice}&sort=price:${sort}`
  );
console.log(data);
  return (
    <div className="lists">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default Lists;