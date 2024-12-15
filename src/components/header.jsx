import React, { useEffect, useState } from "react";
import Swirl from "../bg/swril.tsx";
import HackerBackground from "../bg/hackerbg.tsx";

export const Header = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const handleChanges = () => {
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleChanges);
    return () => {
      window.removeEventListener('resize', handleChanges);
    };
  }, [])
  return (
    <header id="header">
      <div>
        <HackerBackground
          color="#5ca9fb" // Customize the color
          fontSize={25} // Customize the font size
          speed={1} // Customize the fall speed
          className="your-custom-class" // Add custom CSS classes
        />
      </div>
      <div>
        <div className="intro">
          <div className="overlay" >
            <div className="container"
            // style={{ marginTop: "-430px" }}
            >
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h2 style={{ color: "white" }}>
                    {props.data ? props.data.title[props.lang] : "Loading"}
                    <span></span>
                  </h2>
                  {screenWidth < 500 ? (
                    <p>{props.data ? props.data.quote[props.lang] : "Loading"}</p>
                  ) : (
                    <p>{props.data ? props.data.paragraph[props.lang] : "Loading"}</p>
                  )}
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                   {props.lang ?"Learn More":"En savoir plus"}
                  </a>{" "}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <h1 style={{marginTop:"-200px"}}> This content will be inside the swirl!</h1> */}

    </header >
  );
};
