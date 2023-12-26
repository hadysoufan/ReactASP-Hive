import { observer } from "mobx-react-lite";
import React from "react";
import { Profile } from "../../app/models/profile.ts";
import { Card, Icon, Image } from "semantic-ui-react";
import Profile1 from "../../asset/img/hive/profile-1.jpg";
import { Link } from "react-router-dom";

/**
 * Props for the ProfileCard component.
 * @interface Props
 * @property {Profile} profile - The user profile to be displayed in the card.
 */
interface Props {
  profile: Profile;
}

/**
 * A React component that represents a card displaying user profile information.
 * Clicking on the card navigates to the user's profile page.
 * @function ProfileCard
 * @param {Props} props - The properties of the ProfileCard component.
 * @returns {JSX.Element} - The rendered ProfileCard component.
 */
function ProfileCard({ profile }: Props) {
  return (
    <Card as={Link} to={`/hive/user-profile/${profile.username}`}>
      <Image src={profile.image || Profile1} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description>Bio</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" /> 20 Followrs
      </Card.Content>
    </Card>
  );
}

export default observer(ProfileCard);
