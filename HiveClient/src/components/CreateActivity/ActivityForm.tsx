import React, { ChangeEvent, useState, useEffect } from "react";
import { Activity } from '../../app/models/activity';
import './ActivityForm.style.css';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '', 
    description: '',
    date: '',
    city: '',
    venue: ''
  });

  useEffect(() => {
    if (selectedActivity) {
      setActivity(selectedActivity);
    }
  }, [selectedActivity]);

  function handleSubmit() {
    createOrEdit(activity);
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
