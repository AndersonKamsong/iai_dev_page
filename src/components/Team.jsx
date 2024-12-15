import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{props.lang === "en" ? "Meet the Team" : "Rencontrez l'équipe"}</h2>
          <p>
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img  src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job[props.lang]}</p>
                    <hr />
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
