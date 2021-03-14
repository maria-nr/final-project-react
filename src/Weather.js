import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import ReactLoading from 'react-loading';

export default function Weather(props) {
const [data, setData]= useState({ready:false});
    function handleResponse (response) {
        setData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
           date: "Sun 8:00 am",
        })
    }
    if (data.ready) {
        return (
            <div className="weather">
                <form>
                    <div className="row">
                        <div className="col-11">
                    <input type="search" placeholder="Find your city" className="form-control" />
                        </div>
                        <div className ="col-1">
                    <input type="submit" value= "🔎" className="btn btn-info " />
                    </div>
                    <p className="date">{data.date}</p>
                    </div>
                </form>
                <div className="background">
                        
                <div className="top-tittle">
                <h4> {data.city} </h4>
                <div><h1> <span className="temperature">{Math.round(data.temperature)}</span><span className="unit">ºC</span><span className="unit">ºF</span></h1> </div>
                <p className="text-capitalize"> {data.description} </p> 
                </div>
                <div className="icon">
                    <img src={data.icon} alt={data.description} className="float right"  />

                </div>
    
                <div className="row">
                    <div className="details">
                    <div className="col-4">
                    <ul>
                        <li className="title-details"> Humidity</li>
                        <li className="detail">{data.humidity}%</li>
                        <li className="title-details"> Wind</li>
                        <li className="detail">{data.wind}km/h</li>
                    </ul> 
                    </div>
                    </div>
                    <div className="col-8">
                    <div className="clearfix">
                    
                    </div>
                    </div>
                </div>    
                </div>
            </div>
            
        );

    } else {

    
    const apiKey ="c522524629fe11fe83aebe5bb3814efa";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
}
}