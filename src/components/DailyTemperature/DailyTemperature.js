import React from "react";
import classes from "./DailyTemperature.module.css";

export default function DailyTemperature(props){

    let date = new Date();
    date = date.toString();
    const url = "https://openweathermap.org/img/wn/02n@2x.png";

    return(
        <div className = {classes.dailyTempContainer}>
        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>

          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>

          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>

        <div className = {classes.perDayContainer}>
          <div className = {classes.perDay}>
            {date.substr(0,3)}
          </div>
          
          <div className = {classes.perDayImg}>
            <img src = {url}  alt = "clouds" />
          </div>

          <div className = {classes.minmaxContainer}>
            
            <div className = {classes.minmaxFont}>
              7&deg;
            </div>

            <div className = {classes.minmaxFont}>
              -5&deg;
            </div>

          </div>

        </div>
      </div>
    );
};