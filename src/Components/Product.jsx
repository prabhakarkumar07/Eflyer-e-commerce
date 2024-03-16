import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Product = ({ apiUrl, category, searchTerm }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      setProductData(data);
      setLoading(false);
    } catch (error) {
      setErrorMsg("Error occurred while fetching data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [apiUrl]);

  useEffect(() => {
    filterProducts(category, searchTerm);
  }, [category, searchTerm, productData]);

  const filterProducts = (category, searchTerm) => {
    let filtered = [...productData];
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (errorMsg) {
    return (
      <div>
        <p>{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="category-title">
        <h1>Men & Women Fashion</h1>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <div className="add-to-cart">
                  <p className="product-price">${product.price}</p>
                  <button>
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>No Item Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
