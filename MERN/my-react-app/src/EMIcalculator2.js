import React, { Component } from 'react';

export default class CEMI extends Component {
  constructor() {
    super();
    this.state = {
      Principal: '',
      Rate: '',
      Time: '',
      Emi: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.CAEMI = this.CAEMI.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  CAEMI() {
    const { Principal, Rate, Time } = this.state;
    const P = parseFloat(Principal);
    const R = parseFloat(Rate) / (12 * 100); 
    const N = parseFloat(Time) * 12; 

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    this.setState({ Emi: emi.toFixed(2) });
  }

  render() {
    return (
      <div>
        <label>
          Principal:
          <input type="text" name="Principal" value={this.state.Principal} onChange={this.handleChange}/>  
        </label>
        <br />
        <label>
          Rate (%):
          <input type="text" name="Rate" value={this.state.Rate} onChange={this.handleChange}/>
    </label>
        <br />
        <label>
          Time (years):
          <input type="text" name="Time" value={this.state.Time}  onChange={this.handleChange}/>
        </label>
        <br />
        <input type="button" value="Calculate" onClick={this.CAEMI}/>
        <br />
        {this.state.Emi && <div>Calculated EMI: {this.state.Emi}</div>}
      </div>
    );
  }
}
