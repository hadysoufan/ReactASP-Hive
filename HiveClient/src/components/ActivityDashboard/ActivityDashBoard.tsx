import React from "react";
import ActivityList from "../ActivityList/ActivityList.tsx";
import ActivityDetails from "../ActivityDetails/ActivityDetails.tsx";
import ActivityForm from "../ActivityForm/ActivityForm.tsx";
import "./ActivityDashBoard.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";

function ActivityDashBoard() {

  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore;


  return (
    <>
      <Container fluid="md" className="parent">
        <Row>
          <Col>
            <ActivityList/>
          </Col>
        </Row>
        <Row>
          <Col>
            {selectedActivity && !editMode && (
              <ActivityDetails/>
            )}
            {editMode && (
              <ActivityForm/>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default observer(ActivityDashBoard);
