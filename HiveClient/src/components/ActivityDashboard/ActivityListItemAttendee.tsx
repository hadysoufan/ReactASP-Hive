import React, { useRef } from "react";
import { Image, List, Popup } from "semantic-ui-react";
import DefaultImg from "../../asset/img/hive/default.png";
import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../features/Profiles/ProfileCard.tsx";

interface Props {
  attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
  const styles = {
    borderColor: "orange",
    borderWidth: 3,
  };

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
                <Image
                  bordered
                  style={attendee.following ? styles : null}
                  size="mini"
                  circular
                  src={attendee.image || DefaultImg}
                />
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
