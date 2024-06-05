import React from "react";
import "./Lists.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

const Lists = ({ subCats = [], maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item)=>`&[filter][sub_categories][id][$eq]=${item}`
    )}`
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