import React from "react";



export default function WeatherIcon(props){
    const codeMapping = {
        "01d": "sunny.png",
        "01n": "sunny.png",
        "02d": "fclouds.jpg",
        "02n": "fclouds.jpg",
        "03d": "clouds.jpg",
        "03n": "clouds.jpg",
        "04d": "cloudy.jpg",
        "04n": "cloudy.jpg",
        "09d": "rain.jpg",
        "09n": "rain.jpg",
        "10d": "rainy.jpg",
        "10n": "rainy.jpg",
        "11d": "storm.jpg",
        "11n": "storm.jpg",
        "13d": "snow.jpg",
        "13n": "snow.jpg",
        "50d": "mist.jpg",
        "50n": "mist.jpg",
    };
    return (
    <img src={`/Images/${codeMapping[props.code]}`} alt="weather" />
    )
}