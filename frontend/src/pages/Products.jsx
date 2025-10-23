import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Products.css";
import News from "../components/News";

const Products = () => {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Tên sản phẩm ${i + 1}`,
    desc: "Thông tin sản phẩm",
  }));

  return (
    <main className="products-container">
      {/* ===== PHẦN SẢN PHẨM ===== */}
      <section className="product-section">
        <h2 className="section-title">Sản phẩm</h2>

        <div className="product-layout">
          {/* --- CỘT TRÁI --- */}
          <aside className="sidebar">
            <div className="category-box">
              <h3>Danh mục</h3>
              <div className="category-placeholder"></div>
            </div>
            <div className="ad-box">
              <h3>Quảng cáo</h3>
              <div className="ad-placeholder"></div>
            </div>
          </aside>

          {/* --- DANH SÁCH SẢN PHẨM --- */}
          <div className="product-grid">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="product-card-link"
              >
                <div className="product-card">
                  <div className="product-image"></div>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHẦN TIN TỨC ===== */}
      <News />
    </main>
  );
};

export default Products;
