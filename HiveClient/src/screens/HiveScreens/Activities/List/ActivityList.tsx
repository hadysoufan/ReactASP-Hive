import React from "react";
import { Activity } from "../../../../models/activity";
import './ActivityList.style.css';

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
}

function ActivityList({ activities, selectActivity }: Props) {
  return (
    <>
      <div>
        <div className="item-group">
          {activities.map((activity) => (
            <div className="item">
              <div className="item-header">
                <a className="header" href="#">
                  {activity.title}
                </a>
              </div>
              <div className="item-meta">{activity.date}</div>
              <div className="item-description">
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </div>
              <div className="item-extra">
                <div className="ui basic label">{activity.category}</div>
                <button onClick={() => selectActivity(activity.id)} className="btn btn-primary">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActivityList;
