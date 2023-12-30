import React, { useEffect } from "react";
import { useStore } from "../../app/stores/store.ts";
import Loader from "../Loader/Loader.component";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import ActivityDetaledHeader from "./ActivityDetaledHeader.tsx";
import ActivityDetailedInfo from "./ActivityDetailedInfo.tsx";
import ActivityDetailedChat from "./ActivityDetailedChat.tsx";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar.tsx";
import ActivitynavComponent from "../ActivityNavBar/Activitynav.component.tsx";
import { Grid } from "semantic-ui-react";
import './ActivityDetails.styles.css';
import LeftSection from '../LeftSection/LeftSection.component.jsx'

/**
 * A React component for displaying detailed information about a specific activity.
 * @component
 */
function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
    clearSelectedActivity
  } = activityStore;
  const { id } = useParams();

  
  useEffect(() => {
    if (id) loadActivity(id);
    return () => clearSelectedActivity();
  }, [id, loadActivity, clearSelectedActivity]);

  if (loadingInitial || !activity) return <Loader />;

  return (
    <>
      <ActivitynavComponent />
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'10rem 0' }}>
      
      <Grid>
      <Grid.Column width={4}>
      <LeftSection />
        </Grid.Column>
        <Grid.Column width={8}>
          <ActivityDetaledHeader activity={activity} /> 
          <ActivityDetailedInfo activity={activity} />
          <ActivityDetailedChat activityId={activity.id} />
        </Grid.Column>
        <Grid.Column width={4}>
          <ActivityDetailedSideBar activity={activity} />
        </Grid.Column>
      </Grid>
      </div>
    </>
  );
}

export default observer(ActivityDetails);
