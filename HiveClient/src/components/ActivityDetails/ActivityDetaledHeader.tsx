import React from "react";
import "./ActivityDetaledHeader.style.css";
import { Activity } from "../../app/models/activity";
import Profile1 from "../../asset/img/hive/docker.png";
import { Button, Header, Item, Label, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useStore } from "../../app/stores/store.ts";

const activityImageStyle = {
  filter: "brightness(30%)" as 'brightness(30%)',
  width: "100%" as "100%",
  height: "30em" as "30em",
  objectFit: "cover" as "cover",
};

const activityImageTextStyle = {
  position: "absolute" as "absolute",
  bottom: "5%" as "5%",
  left: "5%" as "5%",
  width: "100%" as "100%",
  height: "auto" as "auto",
  color: "white" as "white",
};

interface Props {
  activity: Activity;
}

/**
 * Component for displaying detailed header information of a specific activity.
 * @component
 * @param {Props} props - The properties of the component.
 */
const ActivityDetailedHeader: React.FC<Props> = ({ activity }) => {
  const {
    activityStore: { updateAttendance, loading, cancelActivityToggle },
  } = useStore();

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        {activity.isCancelled && (
          <Label
            style={{ position: "absolute", zIndex: 1000, left: -14, top: 20 }}
            ribbon
            color="red"
            content="Cancelled"
          />
        )}
        <img src={Profile1} style={activityImageStyle} alt="s" />
        <Segment style={activityImageTextStyle} basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: "white" }}
                />
                <p>{format(activity.date!, "dd MMM yyyy")}</p>
                <p>
                  Hosted by{" "}
                  <strong>
                    <Link to={`/hive/user-profile/${activity.host?.username}`}>
                      {activity.host?.displayName}
                    </Link>
                  </strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        {activity.isHost ? (
          <>
            <Button
              color={activity.isCancelled ? "orange" : "red"}
              floated="left"
              basic
              content={
                activity.isCancelled
                  ? "Re-activate Activity"
                  : "Cancel Activity"
              }
              onClick={cancelActivityToggle}
              loading={loading}
            />
            <Button
              disabled={activity.isCancelled}
              as={Link}
              to={`/hive/activity/manage/${activity.id}`}
              color="orange"
              floated="right"
            >
              Manage Event
            </Button>
          </>
        ) : activity.isGoing ? (
          <Button onClick={updateAttendance}>Cancel attendance</Button>
        ) : (
          <Button
            onClick={updateAttendance}
            color="teal"
            disabled={activity.isCancelled}
            loading={loading}
          >
            Join Activity
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default observer(ActivityDetailedHeader);
