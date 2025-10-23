import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";
import UserIcon from "../assets/icons/UserIcon.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src="../public/logo.png" alt="Logo" className="logo-img" />
        </div>

        {/* Company name */}
        <div className="header-title">
          <h1>CÔNG TY POLYSITE</h1>
          <p>
            chuyên sản xuất, cung cấp và xuất khẩu nhiều loại chai PET, PP và PC
          </p>
        </div>

        {/* Login */}
        <div className="header-user">
          <UserIcon style={{ width: "40px", height: "40px" }} />
          <span>Đăng nhập / Đăng ký</span>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/products">Sản Phẩm</Link>
          </li>
          <li>
            <Link to="/services">Dịch vụ</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/gallery">Thư viện ảnh</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
