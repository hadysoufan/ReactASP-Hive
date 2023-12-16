import React from "react";
import "./ActivityDetails.styles.css";
import {Activity} from '../../../../models/activity';
import Default from '../../../../asset/img/hive/default.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface Props {
  activity: Activity ;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}


function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {


  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Default} />
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Text>
          {activity.date}
        </Card.Text>
        <Card.Text>
          {activity.description}
        </Card.Text>
        <Button onClick={() => openForm(activity.id)} variant="primary">Edit</Button>
        <Button onClick={cancelSelectActivity} variant="primary" type='submit'>Cancel</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ActivityDetails;
