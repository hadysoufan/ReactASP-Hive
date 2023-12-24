/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../asset/css/hive.styles.scss";
import "./MiddleSection.component.styles.jsx";
import DefaultImg from "../../asset/img/hive/default.png";
import Profile4 from "../../asset/img/hive/profile-4.jpg";
import Profile5 from "../../asset/img/hive/profile-5.jpg";
import Profile6 from "../../asset/img/hive/profile-6.jpg";
import Profile7 from "../../asset/img/hive/profile-7.jpg";
import Profile8 from "../../asset/img/hive/profile-8.jpg";
import Profile9 from "../../asset/img/hive/profile-9.jpg";
import { useStore } from "../../app/stores/store.ts";

import { Middle } from "./MiddleSection.component.styles.jsx";
import PostList from "../PostList/PostList.component.tsx";
import { Post } from "../../app/models/post.ts";

interface Props {
  posts: Post[];
  // selectedPost: Post | undefined;
  // selectPost: (id: string) => void;
  // cancleSelectPost: () => void;
  // editMode: boolean;
  // openForm: (id: string) => void;
  // closeForm: () => void;
  // createOrEdit: (post: Post) => void;
  // deletePost: (id: string) => void;
}



function MiddleSection({
  posts,
}: Props) {
  const { userStore } = useStore();

  console.log('Posts in MiddleScreen:', posts);

  return (
    <>
      {/* Middle screen side */}
      <Middle>
        {/* Stories */}
        <div className="stories">
          {/* Story 1 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile4} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 2 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile5} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 3 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile6} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 4 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile7} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 5 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile8} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 6 */}
          <div className="story">
            <div className="profile-picture">
              <img className="image" src={Profile9} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>
        </div>
        {/* End of stories */}

        {/* Create post section */}
        <form action="" className="create-post-hive">
          <div className="profile-picture">
            <img
              className="image"
              src={userStore.user?.image || DefaultImg}
              alt="avatar"
            />
          </div>
          <input
            className="input-create-post"
            type="text"
            name="image_upload"
            placeholder="create a post"
            id="create-post"
          />
          <a type="submit" className="btn-hive btn-primary-hive">
            Post
          </a>
        </form>

        {posts && (
          <PostList
            posts={posts}
          />
        )}
      </Middle>
      {/* End of middle section */}
    </>
  );
}

export default MiddleSection;
