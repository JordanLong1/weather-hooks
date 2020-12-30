import React from 'react' 



export const Forecast = (props) => {

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
        <div className='forecast-section-container'> 
        <h2 className='forecast-header'>3 Day Forecast for {props.cityName}</h2>
            {mapForecastPropsToList(props.forecast)}
        </div>
    )
}