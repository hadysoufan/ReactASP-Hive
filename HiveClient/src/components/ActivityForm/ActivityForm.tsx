import React, { ChangeEvent, useState, useEffect } from "react";
import { Activity } from '../../app/models/activity';
import './ActivityForm.style.css';
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";

function ActivityForm() {

  const {activityStore} = useStore();
  const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

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
    activity.id ? updateActivity(activity) : createActivity(activity);
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
          <button disabled={loading}  className='btn btn-primary' type="submit">
          {loading ? 'Submitting...' : 'Submit'}
          </button>

          <button onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default observer(ActivityForm);
