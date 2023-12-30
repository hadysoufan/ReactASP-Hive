import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { Photo } from '../../app/models/photos.ts'

interface Props{
    photo: Photo
}

function PostDetailedInfo({photo}: Props) {
  return (
    <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='orange' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{photo.owner}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='orange'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{photo.description}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
  )
}

export default PostDetailedInfo