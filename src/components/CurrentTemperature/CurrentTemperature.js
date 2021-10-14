import React from "react";
import { BsPinMapFill, BsCalendar2Week } from 'react-icons/bs';
import classes from "./CurrentTemperature.module.css";

export default function CurrentTemperature(props){

  const icon = props.tempIcon + "@2x.png";
  const url = "https://openweathermap.org/img/wn/"+icon;
  
  return(
    <div className={classes.currentTempContainer}>
      <div className={classes.tempLocDateContainer}>
        
        <div className={classes.currentTemp}>
          {props.temperature}&deg;
        </div>

        <div className={classes.locDate}>
          
          <div> 
            <BsPinMapFill className={classes.icon} />
            <div className={classes.location}>
              {props.location}
            </div>
          </div>

          <div>
            <BsCalendar2Week className={classes.icon} />
            <div className={classes.location}>
              {props.date.substr(0, 15)}
            </div>
          </div>

        </div>
        
      </div>

      <div className={classes.imgContainer}>
        <img src={url} alt = {props.iconMain} className={classes.currentTempImg} />
      </div>

    </div>
  );
};