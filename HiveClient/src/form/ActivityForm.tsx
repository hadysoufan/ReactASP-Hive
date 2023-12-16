import React, { ChangeEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Activity } from '../models/activity';
import './ActivityForm.style.css';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

function ActivityForm({ activity: selectedActivity, closeForm }: Props) {

  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity);
    // Add your submit logic here
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value })
  }

  return (
    <div className="activity-form-container">
      <form onSubmit={handleSubmit} autoComplete='off'>
        
          <input placeholder="Title" value={activity.title} name='title' onChange={handleInputChange} />

        
          <input placeholder="Description" value={activity.description} name='description' onChange={handleInputChange} />

        
          <input placeholder="Category" value={activity.category} name='category' onChange={handleInputChange} />

        
          <input type="date" placeholder="Date" value={activity.date} name='date' onChange={handleInputChange} />

        
          <input placeholder="City" value={activity.city} name='city' onChange={handleInputChange} />

        
          <input placeholder="Venue" value={activity.venue} name='venue' onChange={handleInputChange} />

        <div className="button-group">
          <button className='btn btn-primary' type="submit">
            Submit
          </button>

          <button onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityForm;
