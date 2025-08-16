// src/App.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ECrnnPzU_VoKieBBd5PaJkskYXvG9FfVJQ&s",
      name: "Oishi Crispy Patata",
      price: 10.00,
      description: "Sa unang kagat, crispy lahat.",
    },
    {
      id: 2,
      image: "https://cdn.store-assets.com/s/377840/i/85914488.jpeg",
      name: "Chizzpa Potato Chips Hot&Spicy 110g",
      price: 62.00,
      description: "Lami ni siya",
    },
    {
      id: 3,
      image: "https://cdn.store-assets.com/s/377840/i/54011981.jpeg",
      name: "Pancit Canton",
      price: 15.00,
      description: "Masarap pang snacks lalo na sa midnight snack.",
    },
    {
      id: 4,
      image: "https://cdn.store-assets.com/s/377840/i/85914270.jpeg",
      name: "Dragon Seed",
      price: 12.00,
      description: "Malakas sa Pulutan!.",
    },
    {
      id: 5,
      image: "https://cdn.store-assets.com/s/377840/i/85406574.jpeg",
      name: "Kropek ni Mang Juan",
      price: 25.99,
      description: "Sweet Chili Hipon.",
    },
    {
      id: 6,
      image: "https://cdn.store-assets.com/s/377840/i/85157900.jpeg",
      name: "Ding Dong Dantes",
      price: 79.99,
      description: "Signature over printed name",
    },
    {
      id: 7,
      image: "https://cdn.store-assets.com/s/377840/i/69995401.jpeg",
      name: "Snackers Nachos Cheese Jr 150g",
      price: 10.00,
      description: "Sa unang kagat, lami e paak.",
    },
    {
      id: 8,
      image: "https://cdn.store-assets.com/s/377840/i/61813506.jpeg",
      name: "Lala",
      price: 79.99,
      description: "Parang kakampi mo sa ML, Ma-Lala",
    },
  ];

  return (
    <div className="app">
      <h1 className="title">🛒 Mini E-Commerce Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;