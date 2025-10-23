import React from "react";
import "../assets/styles/Home.css";
import News from "../components/News";

const Home = () => {
  return (
    <main className="home-container">
      {/* ===== PHẦN 1: GIỚI THIỆU ===== */}
      <section className="intro-section">
        <div className="intro-banner"></div>

        <div className="intro-content">
          <div className="intro-cards">
            <div className="intro-card"></div>
            <div className="intro-card"></div>
            <div className="intro-card"></div>
          </div>

          <div className="intro-text">
            <h2>Giới thiệu đôi nét doanh nghiệp</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
            <button className="btn-light">Learn more</button>
          </div>
        </div>
      </section>

      {/* ===== PHẦN 2: NHÓM SẢN PHẨM CHÍNH ===== */}
      <section class="products-page">
        <div class="products-header">
          <h1 class="title">Các nhóm sản phẩm chính</h1>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <button class="cta-button btn-light">Xem tất cả</button>
        </div>

        <div class="products-grid">
          <div class="product-card card-large"></div>

          <div class="product-card card-small-top-left"></div>

          <div class="product-card card-small-top-right"></div>

          <div class="product-card card-wide-bottom"></div>
        </div>
      </section>

      {/* ===== PHẦN 3: DỊCH VỤ ===== */}
      <section className="services-section">
        {/* === BÊN TRÁI === */}
        <div className="services-left">
          <h2 className="services-title">Các dịch vụ chúng tôi cung cấp</h2>
          <p className="services-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <div className="services-list">
            <div className="service-item">
              <span>Đặt làm</span>
              <span className="arrow">➜</span>
            </div>
            <div className="service-item">
              <span>Tư vấn</span>
              <span className="arrow">➜</span>
            </div>
            <div className="service-item">
              <span>Thiết kế</span>
              <span className="arrow">➜</span>
            </div>
            <div className="service-item">
              <span>Xem thêm</span>
              <span className="arrow">➜</span>
            </div>
          </div>
        </div>

        {/* === BÊN PHẢI === */}
        <div className="services-right">
          <div className="service-card large">
            <div className="card-image"></div>
            <h4>Hướng dẫn cách thiết kế</h4>
            <button className="btn-light">Đọc thêm</button>
            <div className="card-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="arrow-right">→</span>
            </div>
          </div>

          <div className="service-card small">
            <div className="card-image"></div>
            <h4>Hướng dẫn cách mua hàng</h4>
            <button className="btn-light">Đọc thêm</button>
            <div className="card-dots">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="arrow-right">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHẦN 4: TIN TỨC ===== */}
      <News />
    </main>
  );
};

export default Home;
