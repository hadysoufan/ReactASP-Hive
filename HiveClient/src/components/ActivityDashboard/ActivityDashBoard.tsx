import React, { useEffect } from "react";
import ActivityList from "../ActivityList/ActivityList.tsx";
import "./ActivityDashBoard.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store.ts";
import Loader from "../Loader/Loader.component.jsx";
import ActivityFilters from "./ActivityFilters.jsx";

function ActivityDashBoard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial) return <Loader />;

  return (
    <>
      <Container fluid="md" className="parent">
        <Row>
          <Col xs={12}>
            <ActivityList />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ActivityFilters />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default observer(ActivityDashBoard);

