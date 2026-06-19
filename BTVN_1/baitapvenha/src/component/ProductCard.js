function ProductCard({ sale }) {
  return (
    <div className="product-card">
      {sale && (
        <div className="sale-ribbon" aria-label="Sale">
          <span>Sale</span>
        </div>
      )}
      <div className="product-thumb">280 x 280</div>
      <div className="p-3">
        <div className="mb-1 text-secondary">Product</div>
        <div className="price-row mb-2">
          <span className="old-price">100.000 vnd</span>
          <span className="new-price">80.000 vnd</span>
        </div>
        <div className="d-flex gap-1">
          <button className="cart-btn" type="button" aria-label="Add to cart">+</button>
          <button className="detail-btn px-2" type="button">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
