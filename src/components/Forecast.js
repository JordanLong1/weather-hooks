import React, {useState} from 'react' 



export const Forecast = (props) => {

    const mapForecastPropsToList = (data) => {
        console.log('hello', data)
    }

    return (
        <div> 
            {mapForecastPropsToList(props.forecast)}
        </div>
    )
}