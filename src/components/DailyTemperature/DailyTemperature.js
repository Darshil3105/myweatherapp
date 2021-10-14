import React from "react";
import classes from "./DailyTemperature.module.css";

export default function DailyTemperature(props){

  let newDate = new Date(props.date);
  let days = '';
  const allDays = [];

  const dailyWeather = () => {
    const perDayWeather = [];

    for(let i = 1;i <= 8;i++){
      newDate.setDate(newDate.getDate() + 1);
      days = newDate.toString();
      allDays.push(days.substr(0,3));
    }

    for(let i = 0;i < 8;i++){

      let icons = props.dailyIcons[i];
      icons = icons + "@2x.png";
      const url = "https://openweathermap.org/img/wn/"+icons;

      perDayWeather.push(
        <div className = {classes.perDayContainer} key = {i}>
          <div className = {classes.perDay}>
            {allDays[i]}
          </div>

          <div className = {classes.perDayImg}>
            <img src = {url}  alt = {props.dailyMain[i]} />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              {Math.round(props.minTemp[i])}&deg;
            </div>

            <div className = {classes.minmaxFont}>
              {Math.round(props.maxTemp[i])}&deg;
            </div>

          </div>
          </div>
      );
    }

    return perDayWeather;
  }

  return(
    <div className={classes.dailyTempContainer}>
      {dailyWeather()}
    </div>
  );
};