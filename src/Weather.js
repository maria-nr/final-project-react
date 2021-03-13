import React from "react";
import "./Weather.css";

export default function Weather() {
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
                </div>
            </form>
            <div className="top-tittle">
            <h4> Madrid </h4>
            <h1> <span className="temperature">25</span> <span className="unit">ºC</span></h1> 
            <p> Sunny </p> 
            </div>

            <div className="row">
                <div className="details">
                <div className="col-4">
                <ul>
                    <li className="title-details"> Humidity</li>
                    <li className="detail">30%</li>
                    <li className="title-details"> Wind</li>
                    <li className="detail">15km/h</li>
                </ul> 
                </div>
                </div>
                <div className="col-8">
                <div className="clearfix">
                <div className="background">
                    <img src="https://img.freepik.com/free-vector/happy-woman-walking-rainy-day-with-umbrella-isolated-flat-vector-illustration-cartoon-female-character-being-outdoors-autumn-rain-landscape-weather-concept_74855-10087.jpg?size=626&ext=jpg" ></img>
                </div>
                
                </div>
            </div>    
            </div>
        </div>
        
    )
}