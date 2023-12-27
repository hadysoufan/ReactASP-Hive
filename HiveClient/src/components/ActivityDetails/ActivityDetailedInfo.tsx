import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import { observer } from 'mobx-react-lite';
import { Activity } from '../../app/models/activity';
import { format } from 'date-fns';

interface Props {
    activity: Activity
}
/**
 * A React component for displaying detailed information about an activity.
 * @component
 * @param {Props} props - The component properties.
 * @param {Activity} props.activity - The activity for which to display detailed information.
 */
function ActivityDetailedInfo({activity}: Props) {
  return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='orange' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{activity.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='orange'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
            <span>
            {format(activity.date!, 'dd MMM yyyy h:mm aa')}
            </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='orange'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{activity.venue}, {activity.city}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
  )
}

export default observer(ActivityDetailedInfo);
