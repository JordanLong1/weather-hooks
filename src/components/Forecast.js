import React, {useState} from 'react' 



export const Forecast = (props) => {

    const mapForecastPropsToList = (data) => {
        // console.log('hello', data.forecast.forecastda)
        let forecastMap = data.forecast.forecastday.map(day => {
            return console.log(day)
        })
    }

    return (
        <div> 
            {mapForecastPropsToList(props.forecast)}
        </div>
    )
}