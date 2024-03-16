import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Hero = ({ onSelectCategory, onSearch }) => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    onSelectCategory(selectedCategory);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    onSearch(term);
  };
  return (
    <div className="hero-container">
      <div className="title">
        <h1>Eflyer</h1>
      </div>
      <div className="search-bar">
        <FiAlignJustify className="fethers" />
        <div className="dropdown">
          <Form.Select className="form-control-item" onChange={handleChange}>
            <option value="">All Cat</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </Form.Select>
        </div>
        <div className="  search-box ">
          <Form.Control
            type="text"
            placeholder="Search this blog "
            onChange={handleSearch}
          />
          {/* <CiSearch className="search-button" onClick={handleSearch} /> */}
        </div>
        <div className="dropdown-lang">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="flag-icon">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png" />
            </span>
            <span className="lang-text">English</span>
          </button>
        </div>

        <div className="cart">
          <FaCartShopping className="cart-logo" />
          <p className="cart-title">CART</p>
        </div>
        <div className="profile">
          <CgProfile className="profile-logo" />
          <p className="cart-title">Profile</p>
        </div>
      </div>
      <div className=" imgae-slider">
        <FaAngleLeft className="arrow" />
        <div className="hero-text">
          <h1>GET START</h1>
          <h1>YOUR FAVRIOT SHOPING</h1>
        </div>
        <FaAngleRight className="arrow" />
      </div>
      <div className="hero-buy-button">
        <button> BUY NOW</button>
      </div>
    </div>
  );
};

export default Hero;
