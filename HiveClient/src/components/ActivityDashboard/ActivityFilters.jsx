import React from 'react'
import { Header, Menu } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import Calendar from 'react-calendar';

/**
 * A React component for filtering and displaying activities.
 * @component
 */
function ActivityFilters() {
  return (
    <>
        <Menu vertical size='large' style={{width: '100%', marginTop:'1rem'}}>
            <Header icon='filter' attached color='orange' content='Filters' />
            <Menu.Item content='All Activities' />
            <Menu.Item content="I'm going" />
            <Menu.Item content="I'm hosting" />
        </Menu>
        <Header />
        <Calendar /> 
    </>
  )
}

export default ActivityFilters
