import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="container product-section">
      <h2 className="section-title">New Product</h2>
      <p className="section-subtitle">List product description</p>
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <ProductCard sale />
        </div>
      </div>
    </section>
  );
}

export default ProductList;
