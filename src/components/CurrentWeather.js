import React, {useEffect, useState} from 'react'


export const CurrentWeather = () => {

    let [currentData, setCurrentData] = useState([]); 
    
    const {REACT_APP_WEATHER_KEY} = process.env

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=94518`)
        .then(res => res.json())
        .then(res => setCurrentData(res))
    }, [REACT_APP_WEATHER_KEY])


    const mapCurrentLocationData = () => {
        console.log(currentData)
    }

    const mapCurrentData = () => {
        
    }

return (
    <div>
       {mapCurrentLocationData()}
    </div>
)

}