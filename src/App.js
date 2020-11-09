import React from 'react';
import Form from './Form';
import Weather from './Weather';
import useWeather from './CustomHooks/useWeather';
import WeatherIco from './weather.png'

function App() {

 const {getWeather,City,Country,humidity,description,tempreature,error,icon} = useWeather();

  return (

    <div className="container">
      <img className="weather" src={WeatherIco}></img>
      <h1 className='display-2 text-center'>Weather App</h1>
      
      <Form value={getWeather}/>

      <hr/>
      <Weather City={City} Country={Country} humidity={humidity} description={description} tempreature={tempreature}
      error={error} icon={icon}/>

    </div>
  );
}

export default App;
