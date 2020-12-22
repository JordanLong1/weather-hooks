import React, {useEffect, useState} from 'react'


export const CurrentWeather = () => {

    let [currentData, setCurrentData] = useState([]); 
    let [input, setInput] = useState(''); 
    
    const {REACT_APP_WEATHER_KEY} = process.env

  
    const onTermSubmit = async (event) => {
        event.preventDefault()
           const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=${input}`)
         const data = await response.json()
         setCurrentData(data)
         setInput('')
    }

    const mapCurrentLocationData = () => {
        console.log(currentData)
    }


return (
    <div>
        <div>
            <form onSubmit={onTermSubmit}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search for a location by zip code' />
            </form>
        </div>
       {mapCurrentLocationData()}
    </div>
)

}