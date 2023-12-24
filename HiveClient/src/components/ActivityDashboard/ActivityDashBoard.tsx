import React from "react";
import { Activity } from "../../app/models/activity.ts";
import ActivityList from "../ActivityList/ActivityList.tsx";
import ActivityDetails from "../ActivityDetails/ActivityDetails.tsx";
import ActivityForm from "../CreateActivity/ActivityForm.tsx";
import "./ActivityDashBoard.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

function ActivityDashBoard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) {
  return (
    <>
      <Container fluid="md" className="parent">
        <Row>
          <Col>
            <ActivityList
              activities={activities}
              selectActivity={selectActivity}
              openForm={openForm}
              deleteActivity={deleteActivity}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {selectedActivity && !editMode && (
              <ActivityDetails
                activity={selectedActivity}
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
              />
            )}
            {editMode && (
              <ActivityForm
                closeForm={closeForm}
                activity={selectedActivity}
                createOrEdit={createOrEdit}
                submitting={submitting}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ActivityDashBoard;
