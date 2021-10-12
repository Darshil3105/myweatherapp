import CurrentTemperature from '../CurrentTemperature/CurrentTemperature';
import DailyTemperature from '../DailyTemperature/DailyTemperature';
import classes from './App.module.css';

function App() {

  return (
    <div className = {classes.wrapperContainer}>  

      <CurrentTemperature />

      <DailyTemperature />
      
    </div>
  );
}

export default App;