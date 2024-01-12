import React, { SyntheticEvent } from "react";
import { observer } from "mobx-react-lite";
import { Button, Reveal } from "semantic-ui-react";
import { useStore } from "../../app/stores/store.ts";
import { Profile } from "../../app/models/profile.ts";

interface Props {
  profile: Profile;
}

function FollowButton({ profile }: Props){
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;

  if (userStore.user?.username === profile.username) return null;

  const handleFollow = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await updateFollowing(profile.username, !profile.following);
    } catch (error) {
      // Handle error (e.g., display a message)
    }
  };

  return (
    <Reveal animated="move">
      <Reveal.Content visible style={{ width: "100%" }}>
        <Button
          fluid
          color={profile.following ? "teal" : "orange"}
          content={profile.following ? "Following" : "Follow"}
        />
      </Reveal.Content>
      <Reveal.Content hidden style={{ width: "100%" }}>
        <Button
          fluid
          basic
          color={profile.following ? "red" : "orange"}
          content={profile.following ? "Unfollow" : "Follow"}
          loading={loading && profile.username === userStore.user?.username}
          onClick={handleFollow}
        />
      </Reveal.Content>
    </Reveal>
  );
};

export default observer(FollowButton);
