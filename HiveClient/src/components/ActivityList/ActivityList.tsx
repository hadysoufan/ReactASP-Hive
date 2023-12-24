import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../app/models/activity";
import { Card, Button } from "react-bootstrap";
import "./ActivityList.style.css";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  openForm: (id: string) => void;
  deleteActivity: (id: string) => void;
}

function ActivityList({ activities, selectActivity, openForm, deleteActivity }: Props) {

  return (
    <div className="item-group">
      {activities.map((activity) => (
        <Card key={activity.id} className="item">
          <Card.Header>
            <Card.Title>
              <Link to="/getactivity">{activity.title}</Link>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text className="item-meta">{activity.date}</Card.Text>
            <Card.Text className="item-description">
              <div>{activity.description}</div>
              <div>
                {activity.city}, {activity.venue}
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="item-extra">
              <div className="ui basic label">{activity.category}</div>
              <div className="button-group">
                <Button
                  onClick={() => selectActivity(activity.id)}
                  className="btn-primary-act"
                >
                  View
                </Button>
                <Button
                  onClick={() => deleteActivity(activity.id)}
                  className="btn-primary-delete"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default ActivityList;
