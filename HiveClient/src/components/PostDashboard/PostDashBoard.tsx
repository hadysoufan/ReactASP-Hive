import React, { useEffect } from "react";
import PostList from "../PostList/PostList.component.tsx";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store.ts";
import Loader from "../Loader/Loader.component.jsx";
import { Photo } from "../../app/models/photos.ts";

interface Props {
  photos: Photo[];
}

function PostDashBoard({photos}: Props) {

  return (
    <>
      <PostList photos={photos} /> 
    </>
  );
}

export default observer(PostDashBoard);
