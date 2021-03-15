import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded]= useState(false);
    const [forecast, setForecast]= useState(null);

function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);

}
 if (loaded && props.city === forecast.city.name) {
     return (
         <div className="WeatherForecast row">
                <ForecastPreview data={forecast.list[0]}/>
               
                
               
         </div>
     );
 } else {
     let apiKey =  "c522524629fe11fe83aebe5bb3814efa";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
 }
    
}


