import React from "react";

export default function ForeCastWeather(props) {
  let icon = props.element.weather[0].icon;
  let iconurl = "https://openweathermap.org/img/w/" + icon + ".png";
  let dt = new Date(props.element.dt_txt);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  

  return (
    <div className="container col md-3" style={{ width: "100%", height: "40%" }}>
      <div
        class="card"
        style={{
          backgroundColor: "#00000000",
          color: "white",
          border: "2px solid white",
        }}
      >
        <div className="card-text text-center">
          <h6>{days[(props.index - 1) % days.length]}</h6>
        </div>
        <img src={iconurl} class="card-img-top" alt="..." width="20%" />

        <div className="card-text text-center">
          <h5>{props.element.weather[0].description}</h5>
        </div>
        <div class="card-body d-flex justify-content-between">
          <div class="card-text col text-center">
            {Math.round(props.element.main.temp_min - 273)}°C
          </div>
          <div class="card-text col text-center">
            {Math.round(props.element.main.temp_max - 273)}°C
          </div>
        </div>
      </div>
    </div>
  );
}
