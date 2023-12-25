import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ActivityList.style.css";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";

function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState('');

  function handleActivityDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string){;
    deleteActivity(id);
  }

  return (
    <div className="item-group">
      {activitiesByDate.map((activity) => (
        <div key={activity.id} className="item">
          <div className="item-header">
            <Link to="/getactivity" className="header">
              {activity.title}
            </Link>
          </div>
          <div className="item-body">
            <div className="item-meta">{activity.date}</div>
            <div className="item-description">
              {activity.description}
              <br />
              {activity.city}, {activity.venue}
            </div>
          </div>
          <div className="item-footer">
            <div className="item-extra">
              <div className="ui basic label">{activity.category}</div>
              <div className="button-group">
                <button
                  onClick={() => activityStore.selectActivity(activity.id)}
                  className="btn-primary-act"
                >
                  View
                </button>
                <button
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  className="btn-primary-delete"
                  name={activity.id}
                  disabled={loading}
                >
                  {loading && target ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default observer(ActivityList);
