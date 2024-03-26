import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_t8qVdlN.jpg?format=webp&w=360&dpr=1.3"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709204833_5789678.jpg?format=webp&w=480&dpr=1.3"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              sale  
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710517865_6672705.jpg?format=webp&w=480&dpr=1.3"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710586134_1489140.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710140933_7741026.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1681990857_8858666.jpg?format=webp&w=480&dpr=1.3"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
