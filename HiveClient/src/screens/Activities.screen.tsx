import React, { useEffect } from "react";
import ActivityDashBoard from "../components/ActivityDashboard/ActivityDashBoard.tsx";
import HiveGlobal from "../styled/HiveGlobal.styled.js";
import LeftSection from "../components/LeftSection/LeftSection.component.jsx";
import { useStore } from "../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import ActivitynavComponent from "../components/ActivityNavBar/Activitynav.component.tsx";
import Loader from "../components/Loader/Loader.component.jsx";

/**
 * React component representing the main Activities page.
 * @function Activities
 * @returns {JSX.Element} The JSX representation of the Activities page.
 */
function Activities(): JSX.Element {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader />;

  return (
    <>
      <HiveGlobal />
      <main className="main-hive">
        <ActivitynavComponent/>

        <div className="hive-container">
          <LeftSection />
          <ActivityDashBoard/>
        </div>
      </main>
    </>
  );
}

export default observer(Activities);
