import React from "react";
import "../assets/styles/Footer.css";
import FaceBookIcon from "../assets/icons/FaceBookIcon.jsx";
import YoutubeIcon from "../assets/icons/YoutubeIcon.jsx";
import InstagramIcon from "../assets/icons/InstagramIcon.jsx";
import TiktokIcon from "../assets/icons/TiktokIcon.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-column">
          <h3>PolySite</h3>
          <ul>
            <li>Đặt mua</li>
            <li>Thanh toán</li>
            <li>Nhận báo giá</li>
            <li>Chức năng dự toán</li>
            <li>Tải catalogue</li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Dịch vụ</li>
            <li>Giới thiệu</li>
            <li>Thư viện ảnh</li>
            <li>Liên Hệ</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3>Về doanh nghiệp</h3>
          <ul>
            <li>Featured artists</li>
            <li>The Portal</li>
            <li>Live events</li>
          </ul>
        </div>

        {/* Cột 4 + Đường kẻ */}
        <div className="footer-column product-column">
          <h3>Sản phẩm, dịch vụ</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>History</li>
          </ul>
        </div>

        <div className="footer-divider-vertical"></div>

        {/* Cột 5 - Bản đồ */}
        <div className="footer-column map-column">
          <h3>Vị trí</h3>
          <div className="map-placeholder">
            <div className="map-container">
              <div className="map-container">
                <iframe
                  src="https://maps.google.com/maps?q=21.003242, 105.850080&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  width="330"
                  height="211"
                  style={{ border: 0, borderRadius: "4px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Bản đồ công ty PolySite"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© GDVN, Inc. 2022. Xem hết là duyệt!</p>
        <div className="footer-social">
          <span>Theo dõi chúng tôi:</span>
          <div className="social-icons">
            <FaceBookIcon
              style={{ width: "40px", height: "40px" }}
              className="icon"
            />
            <YoutubeIcon
              style={{ width: "40px", height: "40px" }}
              className="icon"
            />
            <InstagramIcon
              style={{ width: "40px", height: "40px" }}
              className="icon"
            />
            <TiktokIcon
              style={{ width: "40px", height: "40px" }}
              className="icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
