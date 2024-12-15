import React, { useState } from "react";

export const Navigation = (props) => {

  const handleTranslation = () => {
    props.setLanguage(props.lang === "en" ? "fr" : "en");
    localStorage.setItem("iai_dev_lang", props.lang === "en" ? "fr" : "en")
  };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll d-flex" href="#page-top">
            <div className="row">
              <img src="IAI_DEV_Image/logo_iai_dev2.jpg" width={40} height={40} />
              IAI DEV
            </div>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="" className="page-scroll">
                <button onClick={handleTranslation}>
                  {props.lang === "fr" ? (
                    <>
                      <img src="IAI_DEV_Image/en.png" width={20} height={20} alt="English Flag" />
                      {'English'}
                    </>
                  ) : (
                    <>
                      <img src="IAI_DEV_Image/fr.png" width={20} height={20} alt="French Flag" />
                      {'French'}
                    </>
                  )}
                </button>
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                {props.lang === "en" ? "Events" : "Événements"}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {props.lang === "en" ? "About" : "À propos"}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {props.lang === "en" ? "Workshop" : "Ateliers"}
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                {props.lang === "en" ? "Team" : "équipe"}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {props.lang === "en" ? "Contact" : "Contact"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
