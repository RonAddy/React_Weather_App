import React from 'react'
import './ShowWeather.css'


function ShowWeather(props) {
  return(
    <div id="showWeatherComponent">
      <h1>{props.data.name}</h1>
      <h1>{Math.floor((9/5) * (props.data.main.temp- 273) + 32)}&#176;</h1>
      <h1>{props.data.weather[0].description}</h1>
      <h1>MinTemp: {Math.floor((9/5) * (props.data.main.temp_min- 273) + 32)}&#176;</h1>
      <h1>MaxTemp: {Math.floor((9/5) * (props.data.main.temp_max- 273) + 32)}&#176;</h1>
    </div>

  )
}

export default ShowWeather
