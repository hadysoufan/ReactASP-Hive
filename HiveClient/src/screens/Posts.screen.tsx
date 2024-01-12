import React, { useEffect, useState } from "react";
import PostDashBoard from "../components/PostDashboard/PostDashBoard.tsx";
import Loader from "../components/Loader/Loader.component.jsx";
import { observer } from "mobx-react-lite";
import axios, { AxiosResponse } from "axios";
import { Photo } from "../app/models/photos.ts";

/**
 * A React component for displaying posts.
 * @component
 */
function Posts() {
  const [photos, setPhotos] = useState<Photo[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Photo[]>('http://localhost:5000/api/photo')
      .then((response: AxiosResponse<Photo[]>) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, []); 

  if (loading) return <Loader />;

  return (
    <>
      <PostDashBoard photos={photos} />
    </>
  );
}

export default observer(Posts);
