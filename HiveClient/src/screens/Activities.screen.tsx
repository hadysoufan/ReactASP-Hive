import React, { useState, useEffect } from "react";
import { Activity } from "../app/models/activity.ts";
import ActivityDashBoard from "../components/ActivityDashboard/ActivityDashBoard.tsx";
import HiveGlobal from "../styled/HiveGlobal.styled.js";
import LeftSection from "../components/LeftSection/LeftSection.component.jsx";
import { v4 as uuid } from 'uuid';
import agent from "../app/api/agent.ts";
import { useStore } from "../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import ActivitynavComponent from "../components/ActivityNavBar/Activitynav.component.tsx";
import axios from "axios";


interface Props {
  activity: Activity | undefined;
  openForm: () => void;
}

/**
 * React component representing the main Activities page.
 * @function Activities
 * @returns {JSX.Element} The JSX representation of the Activities page.
 */
function Activities({ activity, openForm }: Props): JSX.Element {
  const {activityStore} = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data)
    })
  }, []);

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancleSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancleSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }


  function handleCreateOrEditActivity(activity: Activity){
    activity.id 
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string){
    setActivities([...activities.filter(x => x.id !== id)])
  }

  return (
    <>
    
      <HiveGlobal />
      <main className="main-hive">
        <ActivitynavComponent openForm={handleFormOpen} />

        <div className="hive-container">
          <LeftSection />
          <ActivityDashBoard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancleSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditActivity}
            deleteActivity={handleDeleteActivity}
            submitting={submitting}
          />
        </div>
      </main>
    </>
  );
}

export default observer(Activities); 