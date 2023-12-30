/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../asset/css/hive.styles.scss";
import "./MiddleSection.component.styles.jsx";
import { Middle } from "./MiddleSection.component.styles.jsx";
import Stories from "./Stories.component.jsx";
import CreatePostForm from "./CreatePostForm.tsx";
import Posts from "../../screens/Posts.screen.tsx";


function MiddleSection() {
  return (
    <>
      {/* Middle screen side */}
      <Middle>
        {/* Stories */}
        <Stories />
        {/* End of stories */}

        {/* Create post section */}
        <CreatePostForm />

        <Posts />
      </Middle>
      {/* End of middle section */}
    </>
  );
}

export default MiddleSection;
