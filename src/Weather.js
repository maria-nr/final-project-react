import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import ActualDate from "./ActualDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
const [data, setData]= useState({ready:false});
const [city, setCity]= useState(props.defaultCity);
    function handleResponse (response) {
        setData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
           date: new Date(response.data.dt * 1000),
           icon: response.data.weather[0].icon,
        });
    }

    function search() {
        const apiKey ="c522524629fe11fe83aebe5bb3814efa";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleCitychange(event){
        setCity(event.target.value);

    }
    if (data.ready) {
        return (
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-11">
                    <input type="search" placeholder="Find your city" className="form-control"  onChange={handleCitychange}/>
                        </div>
                        <div className ="col-1">
                    <input type="submit" value= "🔎" className="btn btn-info " />
                    </div>
                    <p className="date"> 
                    <ActualDate date={data.date} />
                    </p>
                    </div>
                </form>
                <WeatherInfo data={data}/>
                <WeatherForecast city={data.city} />
            </div>
        );

    } else {
        search();
    return "loading...";
}
}