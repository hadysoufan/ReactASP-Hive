import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStore } from "../../app/stores/store.ts"; 
import { Grid, Header, Card } from "semantic-ui-react";
import ProfileCard from "./ProfileCard.tsx";
import HiveNav from "../../components/HiveNavBar/HiveNav.component.tsx";

function ProfileFollowings() {
  const { profileStore } = useStore();
  const { profile, followings, loadFollowings } =
    profileStore;

  useEffect(() => {
    loadFollowings("following");
  }, [loadFollowings]);

  return (
    <>
    <HiveNav />
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`People following ${profile?.displayName}`}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {followings.map((profile) => (
              <ProfileCard key={profile.username} profile={profile} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default observer(ProfileFollowings);
