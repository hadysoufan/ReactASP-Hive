import React from 'react';
import DefaultImg from "../../asset/img/hive/default.png";

function CreatePostForm() {


  return (
    <>
        <form action="" className="create-post-hive">
          <div className="profile-picture">
            <img
              className="image"
              src={DefaultImg}
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
          <button type="submit" className="btn-hive btn-primary-hive">
            Post
          </button>
        </form>
    </>
  )
}

export default CreatePostForm
