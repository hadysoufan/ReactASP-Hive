import React from "react";
import { Activity } from "../../../../models/activity.ts";
import ActivityList from "../List/ActivityList.tsx";
import ActivityDetails from "../Details/ActivityDetails.tsx";
import ActivityForm from "../../../../form/ActivityForm.tsx";
import "./ActivityDashBoard.styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSection from '../../../../components/HiveComponents/LeftSection/LeftSection.component.jsx';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
}

function ActivityDashBoard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
}: Props) {
  return (
    <>
    
      <Container fluid="md" className='parent'>
      <LeftSection/>
      <Row>
        <Col>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Col>
        </Row>
        <Row>
        <Col>
        {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancleSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode &&
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
        </Col>
        </Row>
    </Container>
    </>
  );
}

export default ActivityDashBoard;
