import React, { useState } from 'react';



export default function useWeather(){
    const API_KEY = "893f01e5cc21dc8639f5a78fe27c3cb3";
    const [tempreature , setTempreature] = useState('')
    const [City , setCity] = useState('')
    const [Country , setCountry] = useState('')
    const[humidity , setHumidity] = useState('');
    const [description , setDescription] = useState('');
    const [icon , setIcon] = useState("");
    const [error , setError] = useState(false);
  

  async function getWeather(e){
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json()
 
    if(city && country){
      setTempreature(data.main.temp)
      setCity(data.name + ",")
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon);
      setError('')
    }
    else{
        setError(true)
    }

  
  

  }
  
  
  return{getWeather,City,Country,humidity,description,tempreature,error,icon}
  }
 