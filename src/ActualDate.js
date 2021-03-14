import React from "react";

export default function ActualDate(props) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let day= days[props.date.getDay()];
    let hours= props.date.getHours();
    if (hours < 10) {
        minutes= `0${hours}`;
    }
    let minutes= props.date.getMinutes();
    if (minutes < 10) {
        minutes= `0${minutes}`;
    }
    return <div>{day} {hours}:{minutes} </div>
}
