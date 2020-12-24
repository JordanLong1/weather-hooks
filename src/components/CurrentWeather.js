import React, {useState} from 'react'
import {Forecast} from './Forecast'
export const CurrentWeather = () => {

    let [currentData, setCurrentData] = useState([]); 
    const [forecastData, setForecastData] = useState([])
    let [input, setInput] = useState(''); 
    
    const {REACT_APP_WEATHER_KEY} = process.env

    
    const onTermSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=${input}`)
        const data = await response.json()
         setCurrentData(data)
         setInput('')

         getForecastData()
    }

    const mapCurrentWeatherData = () => {
       
      return (
          <div className='weather-details'>
              <h4>{currentData.location.name}, {currentData.location.region}</h4>
              <img src={currentData.current.condition.icon} alt=''/>
            <li>{currentData.current.feelslike_f}</li>
            <li>{currentData.current.condition.text}</li>
            <li>{currentData.current.last_updated}</li>
            <li>{currentData.current.pressure_in}</li>
            <li>{currentData.current.humidity}</li>
            <li>{currentData.current.wind_mph}</li>
          </div>
          
      )
        
    }

    const getForecastData = async () => {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHER_KEY}&q=${input}`)
        const data = await res.json()
        console.log(data)
        setForecastData(data)
    }

  
return (
    <div>
        <div className='search-div'>
            <form onSubmit={onTermSubmit}>
                <label htmlFor='input'>Please enter your zip code:</label>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ex: 12345' />
            </form>
        </div>
        {currentData.length !== 0 ? 
       mapCurrentWeatherData()
       
        :
        <div></div>
        }
        {forecastData.length !== 0 ? 
        <Forecast forecast={forecastData}/>
        : 
        <div></div>
        }
    
     </div>
    )   
}