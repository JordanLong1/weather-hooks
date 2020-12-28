import React, {useState} from 'react' 



export const Forecast = (props) => {

    const mapForecastPropsToList = (data) => {
        return data.forecast.forecastday.map(day => {
            return (
                <div className='forecast-details'>
                    <img src={day.day.condition.icon} alt='' />
                    <h4>{day.day.condition.text}</h4>
                    <li key={day.date}>High: {day.day.maxtemp_f}, Low: {day.day.mintemp_f}</li>
                </div>
            )
        })
    }

    return (
        <div className='forecast-section-container'> 
            {mapForecastPropsToList(props.forecast)}
        </div>
    )
}