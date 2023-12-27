import React from 'react';
import DefaultImg from "../../asset/img/hive/default.png";
import { useStore } from '../../app/stores/store.ts';


function CreatePostForm() {

    const { userStore } = useStore();
  return (
    <>
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
    </>
  )
}

export default CreatePostForm
