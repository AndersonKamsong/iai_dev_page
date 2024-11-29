import React from "react";
import Swirl from "../bg/swril.tsx";

export const Header = (props) => {
  return (
    <header id="header">
      <div>
        {/* Other content */}
        <Swirl
          containerClassName="my-swirl-container" // Optional: Customize the container className
          particleCount={500} // Optional: Set the number of particles (default: 700)
          baseSpeed={0.2} // Optional: Set the base speed of particles (default: 0.1)
          backgroundColor="blue"
        // children={}
        // Add other props as needed (refer to SwirlProps interface)
        >
          {/* Content that will be positioned within the swirl animation */}
          <div className="intro">
            <div className="overlay" >
              <div className="container"
              style={{ marginTop: "-430px" }}
              >
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1 style={{ color: "white" }}>
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>{props.data ? props.data.paragraph : "Loading"}</p>
                    <a
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Learn More
                    </a>{" "}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </Swirl>
      </div>
      {/* <h1 style={{marginTop:"-200px"}}> This content will be inside the swirl!</h1> */}

    </header>
  );
};
