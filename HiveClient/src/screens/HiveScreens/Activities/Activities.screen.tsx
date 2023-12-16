import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Activity } from '../../../models/activity';
import HiveNav from '../../../components/HiveComponents/HiveNavBar/HiveNav.component.jsx';
import ActivityDashBoard from './Dashboard/ActivityDashBoard.tsx';
import Container from 'react-bootstrap/Container';


interface Props {
    activity: Activity | undefined;
    openForm: () => void;
}


function Activities({activity, openForm}: Props) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
                    console.log(response);
                })
            .catch(error => {
                console.error('Error fetching activities:', error);
            });
    }, []); 

    function handleSelectedActivity(id: string){
        setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectActivity(){
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string){
        id? handleSelectedActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose(){
        setEditMode(false);
    }

    return (
        <>
            <HiveNav />

            <Container style={{marginTop: '7em'}}>
            <button onClick={openForm}>Create</button>
                <ActivityDashBoard 
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectedActivity}
                    cancelSelectedActivity={handleCancelSelectActivity} 
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeFOrm={handleFormClose}
                    />
            </Container>

            
        </>
    );        
}

    export default Activities;
