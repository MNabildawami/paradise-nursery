import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Mulai
            </button>
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;