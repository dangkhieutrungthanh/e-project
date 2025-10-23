import React from "react";
import "../assets/styles/News.css";

const News = () => {
  return (
    <section className="news-articles-section">
      <div className="news-container">
        <div className="text-content">
          <h1>Tin tức và bài viết</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <button className="btn-light">Xem tất cả</button>
      </div>

      <div className="articles-grid">
        <div className="article-card">
          <div className="placeholder-image"></div>
          <h2>Sed ut perspiciatis</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit, sed do eiusmod tempor
            incididunt ut labore, sed ...
          </p>
          <a href="#" className="read-more">
            Đọc thêm &rarr;
          </a>
        </div>

        <div className="article-card">
          <div className="placeholder-image"></div>
          <h2>Lorem ipsum dolor</h2>
          <p>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna ...
          </p>
          <a href="#" className="read-more">
            Đọc thêm &rarr;
          </a>
        </div>

        <div className="article-card">
          <div className="placeholder-image"></div>
          <h2>Nemo enim ipsam</h2>
          <p>
            Consectetur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Ut enim ad minima veniam ...
          </p>
          <a href="#" className="read-more">
            Đọc thêm &rarr;
          </a>
        </div>
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default News;
