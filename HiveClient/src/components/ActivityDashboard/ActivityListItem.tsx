import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../app/models/activity";
import { useStore } from "../../app/stores/store.ts";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import Profile1 from "../../asset/img/hive/profile-1.jpg";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee.tsx";

interface Props {
  activity: Activity;
}

function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  return (
    <>
      <Segment.Group>
        <Segment>
          {activity.isCancelled && (
            <Label
              attached="top"
              color="red"
              content="Cancelled"
              styled={{ textAlign: "center" }}
            />
          )}
          <Item.Group>
            <Item>
              <Item.Image style={{marginBottom: 4}} size="tiny" circular src={activity.host?.image || Profile1} />
              <Item.Content>
                <Item.Header as={Link} to={`/hive/activity/${activity.id}`}>
                  {activity.title}
                </Item.Header>
                <Item.Description>
                  Hosted by {activity.host?.displayName}
                </Item.Description>
                {activity.isHost && (
                  <Item.Description>
                    <Label basic color="orange">
                      You are hosting this activity
                    </Label>
                  </Item.Description>
                )}
                {activity.isGoing && !activity.isHost && (
                  <Item.Description>
                    <Label basic color="green">
                      You are going to this activity
                    </Label>
                  </Item.Description>
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{" "}
            {format(activity.date!, "dd MMM yyyy h:mm aa")}
            <Icon name="marker" /> {activity.venue}
          </span>
        </Segment>
        <Segment secondary>
          <ActivityListItemAttendee attendees={activity.attendees!} />
        </Segment>
        <Segment clearing>
          <span>{activity.description}</span>
          <Button
            as={Link}
            to={`/hive/activity/${activity.id}`}
            color="orange"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    </>
  );
}

export default ActivityListItem;
