import axios from 'axios';
import { useState, useEffect } from 'react';
import CurrentTemperature from '../CurrentTemperature/CurrentTemperature';
import DailyTemperature from '../DailyTemperature/DailyTemperature';
import classes from './App.module.css';

function App() {

  const [currentTemperature, setCurrentTemperature] = useState({
    location : '',
    temperature : '',
    tempIcon : '',
    iconMain : '',
  });

  const [dailyTemperature, setDailyTemperature] = useState({
    minTemp: [],
    maxTemp: [],
    dailyIcons: [],
    dailyMain : [],
  });

  let date = new Date();
  date = date.toString();

  const retrieveCurrentTemp = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=52.1579&lon=-106.6702&exclude=hourly,daily,minutely,alerts&appid=5d0016f7ed97f7202dd634612a7b3e7b&units=metric");
    return response.data;
  };

  const retrieveDailyTemp = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=52.1579&lon=-106.6702&exclude=hourly,current,minutely,alerts&appid=5d0016f7ed97f7202dd634612a7b3e7b&units=metric");
    return response.data.daily;
  };

  useEffect(() => {
  
    const getCurrentTemp = async () => {
      const currentTemp = await retrieveCurrentTemp();

      const tempIcon = currentTemp.current.weather.map((temp) => temp.icon);
      const iconMain = currentTemp.current.weather.map((temp) => temp.main);

      if(currentTemp) setCurrentTemperature({
        location: currentTemp.timezone,
        temperature: currentTemp.current.temp,
        tempIcon: tempIcon,
        iconMain: iconMain,
      });
    }

    getCurrentTemp();

    const getDailyTemp = async () => {
      const dailyTemp = await retrieveDailyTemp();

      const minTemp = dailyTemp.map((temp) => temp.temp.min);
      const maxTemp = dailyTemp.map((temp) => temp.temp.max);
      const dailyIcons = dailyTemp.map((temp) => temp.weather.map((temp1) => temp1.icon));
      const dailyMain = dailyTemp.map((temp) => temp.weather.map((temp1) => temp1.main));

      if(dailyTemp) setDailyTemperature(
        {
          minTemp: minTemp, 
          maxTemp: maxTemp, 
          dailyIcons: dailyIcons,
          dailyMain: dailyMain,
        });
    }

    getDailyTemp();

  },[]);

  useEffect(() => {
    
  },[currentTemperature,dailyTemperature]);

  return (
    <div className = {classes.wrapperContainer}>  

      <CurrentTemperature location = {currentTemperature.location} temperature = {Math.round(currentTemperature.temperature)} tempIcon = {currentTemperature.tempIcon} iconMain = {currentTemperature.iconMain} date = {date} />

      <DailyTemperature minTemp = {dailyTemperature.minTemp} maxTemp = {dailyTemperature.maxTemp} dailyIcons = {dailyTemperature.dailyIcons} dailyMain = {dailyTemperature.dailyMain} date = {date} />
      
    </div>
  );
}

export default App;