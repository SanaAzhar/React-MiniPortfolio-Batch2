function ProductCard({ productName, price, inStock, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={productName} className="product-image" />

      <h2>{productName}</h2>

      <p className={inStock ? "price" : "out-stock"}>
        {inStock ? price : "Out of Stock"}</p>

      <span className={inStock ? "available" : "unavailable"}>
        {inStock ? "Available" : "Currently Unavailable"}</span>
    </div>
  )
}

export default ProductCard