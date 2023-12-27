import React, { useEffect } from "react";
import PostDashBoard from "../components/PostDashboard/PostDashBoard.tsx";
import Loader from "../components/Loader/Loader.component.jsx";
import { useStore } from "../app/stores/store.ts";
import { observer } from "mobx-react-lite";

/**
 * A React component for displaying posts.
 * @component
 */
function Posts() {

  const {postStore} = useStore();


  useEffect(() => {
    postStore.loadPosts();
  }, [postStore]);

  
  if(postStore.loadingInitial) <Loader />

  return (
    <>
      <PostDashBoard />
    </>
  );
}

export default observer(Posts);
