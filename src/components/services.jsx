import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Workshops</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-6">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
                <a href={d.link} target="_bank" style={{color :"green"}}>
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
