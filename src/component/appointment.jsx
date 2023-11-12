// import React from 'react'
import "./appointment.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const appointment = () => {
  const tableData = [
    { time: "8 Am", name: "Abu Bakar", description: "Reason" },
    { time: "9 Am", name: "Jane Doe", city: "Los Angeles" },
  ];
  return (
    <div>
      <h2 className="hello">ccript</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>

            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.time}</td>

              <td>{row.name}</td>
              {/* <td>{row.age}</td> */}
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default appointment;
