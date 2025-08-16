export default function ProductCard({ image, name, price, description }) {
    const handleBuyNow = () => {
      console.log(`Bought: ${name}`);
    };
  
    return (
      <div className="product-card">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">₱ {price.toFixed(2)}</p>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    );
  }
  