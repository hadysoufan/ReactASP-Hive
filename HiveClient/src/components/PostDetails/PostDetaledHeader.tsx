import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Item, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store.ts';
import { Photo } from '../../app/models/photos.ts';


const postImageStyle = {
    filter: "brightness(30%)" as 'brightness(30%)',
    width: "100%" as "100%",
    height: "30em" as "30em",
    objectFit: "cover" as "cover",
  };
  
  const postImageTextStyle = {
    position: "absolute" as "absolute",
    bottom: "5%" as "5%",
    left: "5%" as "5%",
    width: "100%" as "100%",
    height: "auto" as "auto",
    color: "white" as "white",
  };

  interface Props{
    photo: Photo
}

function PostDetaledHeader({photo}: Props) {

  const {photoStore} = useStore();
  const {deletePhoto} = photoStore;

  console.log('Received photo:', photo);
  // const { photoStore } = useStore();
  // const { deletePhoto} = photoStore;
  if (!photo) {
    return null; // or display a loading state or handle the case where photo is undefined
  }
  

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <img src={photo.url} style={postImageStyle} alt="s" />
        <Segment style={postImageTextStyle} basic>
          <Item.Group>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
          <>
            <Button
              color="orange"
              floated="left"
              basic
              content='Delete post'
              onClick={() => deletePhoto(photo.id)}
              as={Link}
              to={'/hive'}
            />
            <Button
              as={Link}
              to={`/hive/manage-photo/manage/${photo.id}`}
              color="orange"
              floated="right"
            >
              Manage Post
            </Button>
          </>
      </Segment>
    </Segment.Group>
  )
}

export default PostDetaledHeader

