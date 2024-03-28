import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Inavlid from "./Inavlid";

export default function City() {
  const [city, setCity] = useState("");
  const [countrycode, setCountryCode] = useState("");
  const [count, setCount] = useState(0);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [index, setIndex] = useState(0);
  const [articles, setArticles] = useState(null);
  const [weatherdata, setWeatherData] = useState(null);
  let parsedData=""
  let API_KEY = "fdd32a2da58bd4dacd66dff0fbacefe9";
  useEffect(() => {
    if (count === 1) {
      const fetchData = async () => {
        try{
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        let data = await fetch(url);
        let DATA = await data.json();
        setWeatherData(DATA);}
        catch(error){
          setCount(0)
        }
      };
      fetchData();
    }
  }, [lat, lon, API_KEY]);
  async function getDetails() {
    try{
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
    let data = await fetch(url);

   parsedData = await data.json();

    setArticles(parsedData);}
    catch(error){
      setCount(0)
    }
    
      }
    
  
  useEffect(()=>{
    if(city.length==0 || countrycode.length==0){
      setCount(0);
    }
    else{
    let f=0
    
      if(articles==null){
        setCount(0);return;
      }
      else{
      articles.forEach((element, index) => {
        if (f< 1) {
          if (element.name === city && element.country === countrycode) {
            setIndex(index);
            f=1
            
            setLat(articles[index].lat);
            setLon(articles[index].lon);
           
          }
    
        }
  });setCount(f)}}
  

  },[articles,parsedData])

  function getData() {
    if (weatherdata != null && articles!=null) {
      let icon = weatherdata.list[index].weather[0].icon;
      let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
      try{
      if (count == 1) {
        return (
          <WeatherCard
            index={index}
            element={weatherdata}
            article={articles}
            source={iconurl}
            name={City}
            city={articles[index].name}
            cc={articles[index].country}
          />
        );}}
        catch(error){
          setCount(0)
        }
      }
    }
  

  return (
    <div className="container align-items-center" style={{ height: "12vh" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <input
          type="text"
          placeholder="Any Valid City Name"
          style={{ width: "15vw" }}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Country Of that City in two letter Abrreviation form"
          style={{ width: "85vw" }}
          onChange={(event) => {
            setCountryCode(event.target.value);
          }}
        />
        <button type="button" className="btn btn-primary" onClick={getDetails}>
        Click Me To Get Details
        </button>
      </div>
      {count===0 && <Inavlid/>}
      {weatherdata != null && count === 1 && getData()}
   
    </div>
  );
}
