import React, {Component} from 'react'
import './ZipCode.css'

class ZipCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipValue: null,
    }

    this.zipHandler = this.zipHandler.bind(this);
    this.zipHolder = this.zipHolder.bind(this);

  }

  zipHandler(event) {
    event.preventDefault();
    this.props.getWeather(this.state.zipValue)

  }

  zipHolder(event) {
    const target = event.target.value
    this.setState({
      zipValue: target,
    });
    console.log(target)
  }

  render() {
    return (
      <div id="zipCodeComponent">
      <form onSubmit={this.zipHandler}>
        <input type='text' onChange={this.zipHolder} />
        <input type='submit'></input>
      </form>
      </div>
    )
  }
}


export default ZipCode
