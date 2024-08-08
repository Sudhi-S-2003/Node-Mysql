import { useState ,useContext} from 'react';
import { useMessage } from './MessageProvider'; 
import './Form.css'
function Form() {
  const { addMessage } = useMessage();
  const [formData,SetFormData]=useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);
  function changehandler(e) {
    const {name,value}=e.target;
    SetFormData({...formData,[name]:value});
  }
  function handlesubmit(){
    setIsSubmitting(true);
    // console.log(formData);
    const url = "http://localhost:3000/api/data";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        addMessage('success', 'Data submitted successfully!');
      })
      .catch(error => {
        addMessage('error', 'There was an error submitting the data.');
      }) .finally(() => {
        setIsSubmitting(false); 
      });
    }
  return (
    <div className='form'>
      <div>
        <label htmlFor="boatNumber">Boat Number</label>
        <input type="number" name='boat_number' placeholder="Enter Boat Number" onChange={(e)=>changehandler(e)}/>
      </div>
      <div>
        <label htmlFor="fuelMeasure">Fuel Measure</label>
        <input type="number" name='fuel_measure' placeholder="Enter Fuel Measure" onChange={(e)=>changehandler(e)}/>
      </div>
      <div>
        <label htmlFor="mileage">Mileage</label>
        <input type="number" name="mileage" placeholder="Enter Mileage"onChange={(e)=>changehandler(e)} />
      </div>
      <div className='flex'>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" name="start_time" onChange={(e)=>changehandler(e)}/>
        </div>
        <div>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" name='end_time' onChange={(e)=>changehandler(e)}/>
        </div>
      </div>
      <div className='flex'>
        <div>
          <label htmlFor="startPoint">Start Point</label>
          <input type="text" id="startPoint" name='start_point' placeholder="Enter Start Point" onChange={(e)=>changehandler(e)}/>
        </div>
        <div>
          <label htmlFor="endPoint">End Point</label>
          <input type="text" id="endPoint" name='end_point' placeholder="Enter End Point" onChange={(e)=>changehandler(e)}/>
        </div>
      </div>
      <div>
        <button className='btn' onClick={handlesubmit}>  {isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </div>
    </div>
  );
}

export default Form;
