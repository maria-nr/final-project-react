import React from "react";
import WeatherIcon from "./WeatherIcon";

 export default function WeatherInfo (props) {
     return (
         <div className="WeatherInfo">
               <div className="background">
                        
                        <div className="top-tittle">
                        <h4> {props.data.city} </h4>
                        <div><h1> <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">ºC</span><span className="unit">ºF</span></h1> </div>
                        <p className="text-capitalize"> {props.data.description} </p> 
                        </div>
                        <div className="icon">
                            <WeatherIcon code={props.data.icon} />
                        </div>
            
                        <div className="row">
                            <div className="details">
                            <div className="col-4">
                            <ul>
                                <li className="title-details"> Humidity</li>
                                <li className="detail">{props.data.humidity}%</li>
                                <li className="title-details"> Wind</li>
                                <li className="detail">{props.data.wind}km/h</li>
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
 }