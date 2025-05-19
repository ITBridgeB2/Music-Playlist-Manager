import React from 'react';

export default function Dashboard() {
  const hospitals = [
    {
      hospital_name: "Jayadeva Institute of Cardiology",
      contact_number: "9012345678"
    },
    {
      hospital_name: "Narayana Institute of Cardiac Sciences",
      contact_number: "9112233445"
    },
    {
      hospital_name: "St. Martha’s Heart Centre",
      contact_number: "9556677889"
    },
    {
      hospital_name: "Manipal Hospital", // Assume this one has a cardiology wing
      contact_number: "9888997766"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Matched Hospitals (Cardiology)</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Hospital Name</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hospital.hospital_name}</td>
              <td>
                <a href={`tel:${hospital.contact_number}`}>
                  {hospital.contact_number}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
