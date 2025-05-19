import React, { Component } from 'react';
import VisitorTable from './VisitorTable'; 

export default class ProductList2 extends Component {
  constructor() {
    super();
    this.state = {
      visitors: [
        {
          visitorID: 102,
          visitorName: "Zahid",
          mobileNumber: "1211212420",
          purpose: "CRDuty"
        },
        {
          visitorID: 105,
          visitorName: "TUfail",
          mobileNumber: "1211212420",
          purpose: "Training"
        },
        {
          visitorID: 107,
          visitorName: "TUfail",
          mobileNumber: "1211212420",
          purpose: "Tea"
        },
        {
          visitorID: 10333,
          visitorName: "TUfail",
          mobileNumber: "1211212420",
          purpose: "Meeting"
        },
        {
          visitorID: 10511,
          visitorName: "Tufail",
          mobileNumber: "1211212420",
          purpose: "Training"
        }
      ]
    };
  }

  render() {
    return (
      <div>
       
        <VisitorTable visitors={this.state.visitors} />
      </div>
    );
  }
}
