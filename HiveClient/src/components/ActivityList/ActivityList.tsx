import React, { Fragment } from "react";
import "./ActivityList.style.css";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import ActivityListItem from "../ActivityDashboard/ActivityListItem.tsx";
import { Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

/**
 * Component for displaying a list of activities grouped by date.
 * @component
 */
function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color='orange'>
            {group}
          </Header>
              {activities.map(activity => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
        </Fragment>
      ))}
    </>
  );
}

export default observer(ActivityList);

