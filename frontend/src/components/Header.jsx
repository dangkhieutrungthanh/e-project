import React from "react";
import "./Header.css";
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
          <li>Trang chủ</li>
          <li>Sản Phẩm</li>
          <li>Dịch vụ</li>
          <li>Giới thiệu</li>
          <li>Thư viện ảnh</li>
          <li>Liên hệ</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
