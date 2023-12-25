import React from "react";
import "./ActivityDetails.styles.css";
import Feed from '../../asset/img/hive/feed-4.jpg';
import { useStore } from "../../app/stores/store.ts";
import Loader from "../Loader/Loader.component";

function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if(!activity) return <Loader />;


  return (
    <div className="custom-card">
      <img className="card-image" src={Feed} alt="Activity Thumbnail" />
      <div className="card-content">
        <h3 className="card-header">{activity.title}</h3>
        <p className="card-meta">{activity.date}</p>
        <p className="card-description">{activity.description}</p>
        <button onClick={() => openForm(activity.id)} className="btn-activity btn-primary-activity">
          Edit
        </button>
        <button onClick={cancelSelectedActivity} className="btn-activity btn-primary-activity" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ActivityDetails;
