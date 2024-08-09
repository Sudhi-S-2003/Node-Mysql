import { useLayoutEffect, useState } from "react";
import "./Table.css";
function Table() {
  const [data, SetData] = useState([]);
  useLayoutEffect(() => {
    const url = "http://localhost:3000/api/data";
    fetch(url)
      .then((response) => response.json())
      .then((data) => SetData(data));
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Boat Number</th>
            <th>Fuel Measure</th>
            <th>Mileage</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Start Point</th>
            <th>End Point</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.boat_number}</td>
              <td>{item.fuel_measure}</td>
              <td>{item.mileage}</td>
              <td>{item.start_time}</td>
              <td>{item.end_time}</td>
              <td>{item.start_point}</td>
              <td>{item.end_point}</td>
            </tr>
          ))}
          <tr>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
