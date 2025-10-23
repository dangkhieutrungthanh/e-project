import React from "react";
import "../assets/styles/Services.css";
import News from "../components/News";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Dịch vụ 1",
      desc: "Quia voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: 2,
      title: "Dịch vụ 2",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: 3,
      title: "Dịch vụ 3",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
  ];

  return (
    <main className="services-container">
      {/* ===== PHẦN TIÊU ĐỀ ===== */}
      <section className="services-header">
        <h2 className="section-title">Dịch vụ</h2>
      </section>

      {/* ===== DANH SÁCH DỊCH VỤ ===== */}
      {services.map((s) => (
        <section key={s.id} className="service-item">
          <div className="service-text">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <p>{s.desc}</p>
            <p>{s.desc}</p>
            <button>Xem thêm</button>
          </div>
          <div className="service-image"></div>
        </section>
      ))}

      {/* ===== TIN TỨC ===== */}
      <News />
    </main>
  );
};

export default Services;
