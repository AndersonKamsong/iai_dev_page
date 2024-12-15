import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.lang === "en" ? "Our Workshops" : "Nos ateliers"}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-6">
                {" "}
                <i data-aos-duration="2300" className={d.icon} data-aos="fade-left" ></i>
                <div className="service-desc">
                  <h3 data-aos-duration="1500" data-aos="fade-up">{d.title[props.lang]}</h3>
                  <p data-aos-duration="1500" data-aos="slide-up">{d.text[props.lang]}</p>
                </div>
                <a href={d.link} data-aos-duration="1500" data-aos="slide-up" target="_bank" style={{ color: "green" }}>
                  <span className="fab fa-whatsapp" style={{ fontSize: "25px" }}></span>
                </a>
                <hr />
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
