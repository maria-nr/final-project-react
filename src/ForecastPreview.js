import React from "react";
import "./WeatherIcon.css";

export default function ForecastPreview(props){
    function hours() {
        let date= new Date(props.data.dt* 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}ºC`;
    }

    function icon(){
        let icon = `http://openweather.org/img/wn/${props.data.weather[0].icon}@2x.png`;
        return `${icon}`;
    }
    return (
        <div className="ForecastPreview col">
        {hours()}
        {icon()} 
        {temperature()}
        </div>

    )
}