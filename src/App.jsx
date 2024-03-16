import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import { useState } from "react";

function App({ apiUrl }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header />
      <Hero onSelectCategory={handleCategoryChange} onSearch={handleSearch} />
      <Product
        apiUrl={apiUrl}
        category={selectedCategory}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default App;
