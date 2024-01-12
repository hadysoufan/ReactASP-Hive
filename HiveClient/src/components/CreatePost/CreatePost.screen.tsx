import React, { useEffect, useState, ChangeEvent } from "react";
import $ from "jquery";
import { Post } from "../../app/models/post.ts";
import axios from "axios";
import "./CreatePost.styles.css";
import HiveNav from "../HiveNavBar/HiveNav.component.tsx";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  post: Post | undefined;
}

function CreatePost({ post: selectedPost }: Props) {
  const initialState = selectedPost ?? {
    id: "",
    image: "",
    description: "",
    date: "",
  };

  const [post, setPost] = useState(initialState);

  function handleSubmit() {
    // Generate UUID for id and set current date for the post
    const newPost = {
      ...post,
      id: uuidv4(),
      date: new Date().toISOString(),
    };

    // Send the new post to the server
    axios.post('http://localhost:5000/api/post', newPost)
      .then(response => {
        console.log('Post created successfully:', response.data);
        // Add any additional logic here (e.g., redirect to another page)
      })
      .catch(error => console.error('Error creating post:', error));
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    // Event handlers for post form overlay
    $(".post-form").on("click", ".open-overlay", function (e) {
      e.preventDefault();
      $($(this).data("target")).removeClass("closed").addClass("open");
      $(".post-form-backdrop").removeClass("closed");
    });

    $(".post-form").on("click", ".post-form-overlay .close", function () {
      $(this)
        .parents(".post-form-overlay")
        .addClass("closed")
        .removeClass("open");
      $(".post-form-backdrop").addClass("closed");
    });
  }, []);

  return (
    <>
      <HiveNav />

      {/* Modal */}
      <div className="containerr">
        <div className="post-form" onClick={(e) => preventDefault(e)}>
          <div className="post-form-backdrop closed"></div>
          <div className="post-section editor-title">
            <h3 className="page-title">New Post</h3>
          </div>
          <div className="post-section">
            <label>Post Content</label>
            <div className="post-title">
              <input
                type="text"
                name="title"
                id="post-title"
                className="post-input large"
                placeholder="Title..."
              />
            </div>
            <div className="post-content">
              <textarea
                name="content"
                className="post-input"
                placeholder="Content..."
              ></textarea>
            </div>
          </div>
          <div className="post-section post-media">
            <label>Media</label>
            <div className="post-media-inner">
              <div className="post-media-icon thumbnail">
                <button className="delete-media btn btn-danger btn-xs">
                  &times;
                </button>
                <img src="//placehold.it/150x150" alt="" />
              </div>
              <div className="post-media-icon thumbnail">
                <button className="delete-media btn btn-danger btn-xs">
                  &times;
                </button>
                <img src="//placehold.it/150x150" alt="" />
              </div>
              <div className="post-media-icon thumbnail">
                <button className="delete-media btn btn-danger btn-xs">
                  &times;
                </button>
                <img src="//placehold.it/150x150" alt="" />
              </div>
              <button className="post-media-icon btn btn-default">
                <i className="glyphicon glyphicon-plus"></i>
                <br />
                Add Media
              </button>
            </div>
          </div>
          <div className="post-section post-buttons">
            <div className="dropup pull-left">
              <button
                type="button"
                className="btn btn-default"
              >
                Add More
              </button>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
