import React , {useState} from 'react';

export default function useClock(){

    const date = new Date();
    const [hour , setHour] = useState(date.getHours())
    const [min , seMin] = useState(date.getMinutes())
    const [time,setTime] = useState('AM')

    if(hour>12){
        setHour(hour - 12)
        setTime('PM')
    }
    
    if(hour ===0){
         setHour(12)
    }
   

    return {hour , min , time}


}