import React from 'react';

const VisitorTable = ({ visitors }) => {
  return (
    <div>
      <h2>Visitor Details</h2>
      <table border="2" cellPadding="8" cellSpacing="2">
        <thead>
          <tr>
            <th>Visitor ID</th>
            <th>Visitor Name</th>
            <th>Mobile Number</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.visitorId}>
              <td>{visitor.visitorId}</td>
              <td>{visitor.visitorName}</td>
              <td>{visitor.mobileNumber}</td>
              <td>{visitor.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorTable;
