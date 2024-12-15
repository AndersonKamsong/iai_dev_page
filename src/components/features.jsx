import React, { useEffect } from "react";
import AOS from 'aos';

export const Features = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{props.lang === "en" ? "Up Comming Events" : "Événements à venir"}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} data-aos="fade-up" data-aos-duration="2000"
               className="col-xs-6 col-md-3">
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title[props.lang]}</h3>
                <p>{d.text[props.lang]}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
