import React, { useState } from "react";
import "./Products.scss";
import Lists from "../../components/Lists/Lists";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)
  return (
    <div className="products">
      {/*left*/}
      <div className="left">
        <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItems">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItems">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2">Shirts</label>
            </div>
            <div className="inputItems">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3">Over-sized Tshirts</label>
            </div>
            <div className="inputItems">
                <input type="checkbox" id="4" value={4} />
                <label htmlFor="4">Joggers</label>
            </div>
        </div>
        <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={2000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
            </div>
        </div>
        <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort('desc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort('asc')}/>
            <label htmlFor="desc">Price (Highest  first)</label>
            </div>
        </div>
      </div>

      {/*right*/}
      <div className="right">
        <img className="catImg" 
        src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/9242120230327133914.jpg?format=webp&w=1500&dpr=1.3" 
        alt="" />
        <Lists catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;
