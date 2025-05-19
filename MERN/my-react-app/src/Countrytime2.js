import React, { Component } from 'react';

export default class CnTime2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
    this.cTime = this.cTime.bind(this);
  }

  
  timeZones = {
    India:      'Asia/Kolkata',
    Australia:  'Australia/Sydney',
    USA:        'America/New_York'
  };

  cTime() {
    const country = this.props.country;             
    const tz = this.timeZones[country];              
    if (!tz) {
      alert(`Unsupported country: ${country}`);
      return;
    }

    
    const options = {
      timeZone: tz,
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    this.setState({
      time: new Date().toLocaleTimeString('en-US', options)
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.cTime}>
          Show {this.props.country} Time
        </button>
        <span> {this.state.time}</span>
      </div>
    );
  }
  componentDidMount(){
    this.timerID= setInterval(this.cTime,1000);
 }
 componentWillUnmount(){
     clearInterval(this.timerID);
 }
}
