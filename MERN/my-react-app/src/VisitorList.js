import React from 'react';

const VisitorList = ({ visitors }) => {
  return (
    <div>
      <ul>
        {visitors.map((visitor) => (
          <li key={visitor.visitorId}>
            <p>ID: {visitor.visitorId}</p>
            <p>Name: {visitor.visitorName}</p>
            <p>Mobile: {visitor.mobileNumber}</p>
            <p>Purpose: {visitor.purpose}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitorList;
