import React, { useRef } from "react";
import { Image, List, Popup } from "semantic-ui-react";
import Profile1 from "../../asset/img/hive/profile-1.jpg";
import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../features/Profiles/ProfileCard.tsx";

interface Props {
  attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
  const popupRef = useRef(null);

  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <List.Item key={attendee.username}>
          <Popup
            hoverable
            ref={popupRef}
            on="hover"
            trigger={
              <Link to={`/hive/user-profile/${attendee.username}`}>
                <Image size="mini" circular src={attendee.image || Profile1} />
              </Link>
            }
          >
            <Popup.Content>
              <ProfileCard profile={attendee} />
            </Popup.Content>
          </Popup>
        </List.Item>
      ))}
    </List>
  );
}

export default observer(ActivityListItemAttendee);
