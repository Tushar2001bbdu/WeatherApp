import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from "../Components/barometer.png";
import humidity from "../Components/weather.png";
import ForeCastWeather from "./ForeCastWeather";

export default function WeatherCard(props) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dt = new Date(props.element.list[props.index].dt_txt);

  let index1 = dt.getDay();
  return (
    <div
      className="container bg-opacity-25"
      style={{ width: "100%", alignSelf: "center", marginTop: "5%" }}
    >
      <div
        className="container"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      >
        <div
          class="card"
          style={{ backgroundColor: "rgb(0,0,0,0.5)", color: "white" }}
        >
          <div className="card-body">
            <div className="row">
              <div
                className="image"
                style={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={props.source}
                  style={{ height: "15vw", width: "auto", alignSelf: "center" }}
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>

            <div className="row">
              <div class="card-title">
                <h1>
                  
                  {Math.round(props.element.list[props.index].main.temp - 273)}
                  °C,{props.city},{props.cc}
                </h1>
              </div>
              <div className="card-text" style={{ color: "orange" }}>
                <h3>{props.element.list[props.index].weather[0].description}</h3>
              </div>
              <div className="card-text">
                <h6>
                  {dt.getDate()} {month[dt.getMonth()]},{dt.getFullYear()},
                  {days[dt.getDay() - 1]}
                </h6>
              </div>
              <div class="card-text">
                <h6>
                  {Math.round(
                    props.element.list[props.index].main.temp_min - 273
                  )}
                  °C/
                  {Math.round(
                    props.element.list[props.index].main.temp_max - 273
                  )}
                  °C Feels like{" "}
                  {Math.round(props.element.list[0].main.feels_like - 273)}°C
                </h6>
              </div>
            </div>
            <div className="items" style={{ color: "orange" }}>
              <div
                className="row d-flex flex-row justify-content-around "
                style={{ height: "40%", margin: "5%" }}
              >
                <div className="col" style={{ width: "auto" }}>
                  <div className="card-text" style={{ marginBottom: "3%" }}>
                    <img src={humidity} color="white" />
                    Humidity
                  </div>
                  <div className="card-text">
                    <h3>{props.element.list[props.index].main.humidity} %</h3>
                  </div>
                </div>
                <div className="col" style={{ width: "auto" }}>
                  <div className="card-text" style={{ marginBottom: "3%" }}>
                    <FontAwesomeIcon icon={faWind} color="white" />
                    Wind
                  </div>
                  <div className="card-text">
                    <h3>{props.element.list[props.index].wind.speed} km/h</h3>
                  </div>
                </div>
              </div>
              <div
                className="row d-flex flex-row justify-content-around"
                style={{ height: "40%", margin: "5%" }}
              >
                <div className="col" style={{ width: "50%" }}>
                  <div className="card-text" style={{ marginBottom: "3%" }}>
                    <FontAwesomeIcon icon={faEyeSlash} color="white" />
                    Visibilty
                  </div>
                  <div className="card-text">
                    <h3>{props.element.list[props.index].visibility/1000} km</h3>
                  </div>
                </div>
                <div className="col" style={{ width: "50%" }}>
                  <div className="card-text" style={{ marginBottom: "3%" }}>
                    <img src={image} style={{ color: "white" }} />
                    Pressure
                  </div>
                  <div className="card-text">
                    <h3>{props.element.list[props.index].main.pressure}mb</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading text-center">
              <h3>Next 4 days forecast</h3>
            </div>
            <div className="items row">
              {props.element.list.map((element, index) => {
                index1 = index1 + 1;

                if (index >= 1 && index < 5) {
                  return (
                    <div className="ITEM col md-4">
                      <ForeCastWeather
                        element={element}
                        list={props.element.list[index]}
                        index={index1}
                        INDEX={props.index}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
