import React, { Component } from 'react';
import './App.css';
import ZipCode from './Components/ZipCode'
import ShowWeather from './Components/ShowWeather'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiDataLoaded: false,
      weatherData: null,
    }

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(zip) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&?units=imperial&appid=b68fc467bc2d495f0aa03aae3316b190`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          weatherData: res,
          apiDataLoaded: true,
        });
        console.log(this.state.weatherData)
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div id="appDiv">
        <ZipCode getWeather={this.getWeather}/>

        {this.state.apiDataLoaded ? (<ShowWeather data={this.state.weatherData} />) :
                                    (<p id="loadingDiv">Enter Zip Code</p>)}

      </div>

    );
  }
}

export default App;
