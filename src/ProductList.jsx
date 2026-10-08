import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=300", description: "Calming scent.", cost: "$15" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729800077-ac750f390011?w=300", description: "Sweet aroma.", cost: "$18" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=300", description: "Crisp scent.", cost: "$12" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300", description: "Refreshing herb.", cost: "$10" },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300", description: "Invigorating scent.", cost: "$20" },
        { name: "Thyme", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300", description: "Earthy scent.", cost: "$8" },
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300", description: "Soothes burns.", cost: "$14" },
        { name: "Echinacea", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300", description: "Immune support.", cost: "$16" },
        { name: "Peppermint", image: "https://images.unsplash.com/photo-1603569283847-be29b8b3bf1d?w=300", description: "Aids digestion.", cost: "$11" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300", description: "Relieves stress.", cost: "$13" },
        { name: "Chamomile", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300", description: "Promotes sleep.", cost: "$12" },
        { name: "Calendula", image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=300", description: "Skin healing.", cost: "$15" },
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?w=300", description: "Thrives on neglect.", cost: "$22" },
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300", description: "Tolerates low light.", cost: "$25" },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1596724817763-9219f67ea73a?w=300", description: "Fast grower.", cost: "$14" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300", description: "Easy to propagate.", cost: "$15" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=300", description: "Air purifier.", cost: "$19" },
        { name: "Succulent", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300", description: "Minimal watering.", cost: "$9" },
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Paradise Nursery</h2>
        </div>
        <div className="navbar-links">
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button onClick={() => setShowCart(true)}>
            Cart 🛒 <span className="cart-count">{totalCartCount}</span>
          </button>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, idx) => (
            <div key={idx} className="category-section">
              <h2>{categoryObj.category}</h2>
              <div className="plant-list">
                {categoryObj.plants.map((plant, pIdx) => (
                  <div key={pIdx} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-cost">{plant.cost}</p>
                    <button
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                      className="add-to-cart-btn"
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;