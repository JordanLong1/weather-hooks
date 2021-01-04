import React from 'react' 
import PropTypes from 'prop-types';


export const Forecast = ({cityName, forecast}) => {

    const mapForecastPropsToList = (data) => {
        return data.forecast.forecastday.map(day => {
            return (
                <div className='forecast-details-section' key={day.date}>
                    <div className='forecast-details'>
                    <img src={day.day.condition.icon} alt='' />
                    <h4>{day.day.condition.text}</h4>
                    <li>High: {day.day.maxtemp_f}, Low: {day.day.mintemp_f}</li>

                    </div>
                </div>
            )
        })
    }

    return (
        <div className='weather-details'> 
        <h2 className='forecast-header'>3 Day Forecast for {cityName}</h2>
            {mapForecastPropsToList(forecast)}
        </div>
    )
}

Forecast.propTypes = {
forecast: PropTypes.object.isRequired,
cityName: PropTypes.string.isRequired
}
