import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                    <hr />
                    {d?.link?.facebook && (<i class=" fa fa-facebook" style={{ fontSize: "15px" }}></i>)}&nbsp;&nbsp;
                    {d?.link?.facebook && (<i class=" fa fa-github" style={{ fontSize: "15px" }}></i>)}&nbsp;&nbsp;
                    {/* {d?.link?.facebook && (<i class=" fa fa-linkedin" style={{ fontSize: "20px" }}></i>)}&nbsp;&nbsp; */}
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
