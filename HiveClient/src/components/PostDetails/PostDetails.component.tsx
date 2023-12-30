import React, { useEffect } from "react";
import "./PostDetails.component.styles.css";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useStore } from "../../app/stores/store.ts";
import Loader from "../Loader/Loader.component";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import PostDetaledHeader from "./PostDetaledHeader.tsx";
import PostDetailedInfo from "./PostDetailedInfo.tsx";
import PostDetailedChat from "./PostDetailedChat.tsx";
import HiveNav from '../HiveNavBar/HiveNav.component.tsx';
import LeftSection from "../LeftSection/LeftSection.component.jsx";

function PostDetails() {

  const { photoStore } = useStore();
  const { loadPhoto, selectedPhoto, loadingInitial } = photoStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadPhoto(id);
    }
  }, [id, loadPhoto]);

  if (loadingInitial) return <Loader />;
  

  return (
    <>
    <HiveNav />

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin:'12rem 0' }}>
      <Grid>
      <Grid.Column width={4}>
      <LeftSection />
        </Grid.Column>
        <Grid.Column width={8}>
          <PostDetaledHeader photo={selectedPhoto} />
          {selectedPhoto && <PostDetailedInfo photo={selectedPhoto} />}
          <PostDetailedChat />
        </Grid.Column>
      </Grid>
      </div>
    </>
  );
}

export default observer(PostDetails);
