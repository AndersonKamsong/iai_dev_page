import React, { useEffect } from "react";
import AOS from 'aos';

export const About = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" data-aos="fade-left">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 data-aos-duration="2000" data-aos="fade-right">{props.lang === "en" ? "About Us" : "À propos de nous"}</h2>
              <p data-aos-duration="2000" data-aos="fade-left">{props.data ? props.data[props.lang].paragraph : "loading..."}</p>
              <h3 data-aos-duration="2000" data-aos="fade-down">{props.lang === "en" ? "Why Choose Us?" : "Pourquoi nous choisir?"}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data[props.lang].why.map((d, i) => (
                        <li key={`${d}-${i}`} data-aos-duration="2000" data-aos="slide-up">{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data[props.lang].why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
