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
            <div className="background">
                    
            <div className="top-tittle">
            <h4> Madrid </h4>
            <div><h1> <span className="temperature">25</span><span className="unit">ºC</span><span className="unit">ºF</span></h1> </div>
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
                
                </div>
                </div>
            </div>    
            </div>
        </div>
        
    )
}