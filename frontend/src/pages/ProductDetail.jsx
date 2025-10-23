import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/ProductDetail.css";
import News from "../components/News";

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data based on id
  const product = {
    id: parseInt(id),
    name: `Tên sản phẩm ${id}`,
    desc: "Thông tin sản phẩm",
    fullDesc:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    details: [
      "Chất liệu: Gỗ tự nhiên cao cấp",
      "Kích thước: 120x60x75cm",
      "Màu sắc: Nâu sáng / Trắng / Đen",
      "Bảo hành: 12 tháng",
      "Xuất xứ: Việt Nam",
    ],
  };

  return (
    <main className="product-detail-container">
      {/* === PHẦN TIÊU ĐỀ === */}
      <section className="product-detail-header">
        <h2>Chi Tiết Sản Phẩm</h2>
      </section>

      {/* === KHU VỰC SẢN PHẨM === */}
      <section className="product-info">
        <div className="product-detail-image"></div>
        <div className="product-text">
          <h3>{product.name}</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <button className="btn-order">Đặt Hàng Thiết Kế</button>
        </div>
      </section>

      {/* === TAB MÔ TẢ / THÔNG TIN === */}
      <section className="product-tabs">
        <div className="tab-buttons">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Mô Tả
          </button>
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Thông tin chi tiết
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" ? (
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit...
            </p>
          ) : (
            <ul>
              <li>Chất liệu: Gỗ tự nhiên cao cấp</li>
              <li>Kích thước: 120x60x75cm</li>
              <li>Màu sắc: Nâu sáng / Trắng / Đen</li>
              <li>Bảo hành: 12 tháng</li>
              <li>Xuất xứ: Việt Nam</li>
            </ul>
          )}
        </div>
      </section>

      {/* === TIN TỨC === */}
      <News />
    </main>
  );
};

export default ProductDetail;
