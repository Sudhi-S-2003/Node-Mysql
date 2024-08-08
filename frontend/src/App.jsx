import './app.css';

function App() {
  return (
    <div className='form'>
      <div>
        <label htmlFor="boatNumber">Boat Number</label>
        <input type="number" id="boatNumber" placeholder="Enter Boat Number" />
      </div>
      <div>
        <label htmlFor="fuelMeasure">Fuel Measure</label>
        <input type="number" id="fuelMeasure" placeholder="Enter Fuel Measure" />
      </div>
      <div>
        <label htmlFor="mileage">Mileage</label>
        <input type="number" id="mileage" placeholder="Enter Mileage" />
      </div>
      <div className='flex'>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" />
        </div>
        <div>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" />
        </div>
      </div>
      <div className='flex'>
        <div>
          <label htmlFor="startPoint">Start Point</label>
          <input type="text" id="startPoint" placeholder="Enter Start Point" />
        </div>
        <div>
          <label htmlFor="endPoint">End Point</label>
          <input type="text" id="endPoint" placeholder="Enter End Point" />
        </div>
      </div>
      <div>
        <button className='btn'>Submit</button>
      </div>
    </div>
  );
}

export default App;
