import React, { Component } from "react";

export default class CnTime extends Component {
  state = {
    selectedCountry: "",
    time: ""
  };

  handleCountryChange = (e) => {
    this.setState({ selectedCountry: e.target.value, time: "" });
  };

  displayTime = () => {
    const { selectedCountry } = this.state;
    if (!selectedCountry) {
      alert("Please select a country first!");
      return;
    }
    const options = {
      timeZone: selectedCountry,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true
    };
    this.setState({
      time: new Date().toLocaleString("en-US", options)
    });
  };

  render() {
    const { selectedCountry, time } = this.state;
    return (
      <div>
        <h3>Select a Country</h3>
        <select value={selectedCountry} onChange={this.handleCountryChange}>
          <option value="">-- Select --</option>
          <option value="Asia/Kolkata">India</option>
          <option value="America/New_York">USA</option>
          <option value="Australia/Sydney">Australia</option>
        </select>

        <br /><br />

        <button onClick={this.displayTime}>Display Time</button>
        <p>{time}</p>
      </div>
    );
  }
}
