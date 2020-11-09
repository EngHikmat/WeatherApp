import React, { useState } from 'react';
import './Weather.css'
import bgWe from './bg.jpg'
import useClock from './CustomHooks/useClock';


export default function Weather(props){
    
    const sr= `http://openweathermap.org/img/w/${props.icon}.png`;
    const Celisus = Math.floor((props.tempreature - 273.15));
    const {hour , min , time } = useClock();
    

    return(
        <div>
            {props.error?
                <div class="alert alert-danger mt-5">
                    <strong>Error</strong> You should <a href="#" className="alert-link">Enter a correct city and Country</a>.
                </div>
            : 
            <div className='header'>
                <h2>{props.City}{props.Country}</h2>
                {props.tempreature &&  <h4 className='display-4'>  {Celisus}<sup>o</sup><i></i><span className='display-4'>{hour +':' + min +' '+ time}</span></h4>}
                {props.description &&  <p>{props.description&& <img src={sr}></img>}{props.description} <span><i></i>Humidity: {props.humidity}%</span></p>}
            </div>
            }
        </div>
    )
}