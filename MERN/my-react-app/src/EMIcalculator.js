import React, { Component } from 'react';

class EMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: '',
      rate: '',
      time: '',
      emi: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculateEMI = this.calculateEMI.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  calculateEMI() {
    const { principal, rate, time } = this.state;
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const N = parseFloat(time) * 12;

    if (isNaN(P) || isNaN(annualRate) || isNaN(N) || P <= 0 || annualRate <= 0 || N <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const R = annualRate / (12 * 100);
    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    this.setState({ emi: emiValue.toFixed(2) });
  }

  render() {
    const { principal, rate, time, emi } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>EMI Calculator</h2>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            name="principal"
            value={principal}
            onChange={this.handleChange}
            placeholder="Enter principal amount"
          />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            name="rate"
            value={rate}
            onChange={this.handleChange}
            placeholder="Enter annual interest rate"
          />
        </div>
        <div>
          <label>Loan Tenure (Years):</label>
          <input
            type="number"
            name="time"
            value={time}
            onChange={this.handleChange}
            placeholder="Enter loan tenure in years"
          />
        </div>
        <button onClick={this.calculateEMI}>Calculate EMI</button>
        {emi && (
          <div>
            <h3>Monthly EMI: ₹{emi}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default EMICalculator;
