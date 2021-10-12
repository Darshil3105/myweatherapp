import React from "react";
import { BsPinMapFill, BsCalendar2Week } from 'react-icons/bs';
import classes from "./CurrentTemperature.module.css";

export default function CurrentTemperature(props){

    let date = new Date();
    date = date.toString();
    const url = "https://openweathermap.org/img/wn/02n@2x.png";  

    return(
        <div className = {classes.currentTempContainer}>
        <div className = {classes.tempLocDateContainer}>
          <div className = {classes.currentTemp}>
            17&deg;
          </div>
          <div className = {classes.locDate}>
            <div>
              <BsPinMapFill className = {classes.icon} /> 
              <div className = {classes.location}>
                Saskatoon
              </div>
            </div>
            <div>
              <BsCalendar2Week className = {classes.icon} />
              <div className = {classes.location}>
                {date.substr(0,15)}
              </div>
            </div>
          </div>
        </div>

        <div className = {classes.imgContainer}>
          <img src = {url}  alt = "clouds" className = {classes.currentTempImg} />
        </div>

      </div>
    );
};