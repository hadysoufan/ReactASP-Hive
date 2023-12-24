import React, { useState } from "react";
import {
  Feeds,
  Edit,
  DropDown,
  Modal,
  CloseIcon,
  ModalContent,
} from "./PostList.component.styles";
import { useStore } from "../../app/stores/store.ts";
import { Link } from "react-router-dom";
import DefaultImg from "../../asset/img/hive/default.png";
import { Post } from "../../app/models/post";
import Profile1 from "../../asset/img/hive/profile-1.jpg";
import Profile2 from "../../asset/img/hive/profile-2.jpg";
import Profile3 from "../../asset/img/hive/profile-3.jpg";

interface Props {
  posts: Post[];
  post: Post | undefined;
  // selectPost: Post;
  // openForm: (id: string) => void;
  //deleteActivity: (id: string) => void;
}

function PostList({ posts, post: selectedPost }: Props) {
  const initialState = selectedPost ?? {
    id: "",
    image: "",
    date: "",
    description: "",
  };

  const [post, setPost] = useState(initialState);
  const [editedDescription, setEditedDescription] = useState("");

  function handleSubmit() {
    setPost({ ...post, description: editedDescription });
    console.log(post);
    closeModal();
  }

  const { userStore } = useStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Post | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = (post: Post, editMode: boolean = false) => {
    setIsModalOpen(true);
    setModalContent(post);
    setIsEditMode(editMode);
    setEditedDescription(post.description);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setIsEditMode(false);
  };

  return (
    <>
      <Feeds>
        {posts.map((post) => (
          <div key={post.id} className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img
                    className="image"
                    src={userStore.user?.image || DefaultImg}
                    alt="avatar"
                  />
                </div>
                <div className="info">
                  <h3>
                    <Link to="/hive/user-profile">
                      {userStore.user?.username}
                    </Link>
                  </h3>
                  <small>{post.date}</small>
                </div>
              </div>
              <Edit>
                <i className="uil uil-ellipsis-h"></i>
                <DropDown>
                  <li onClick={() => openModal(post, true)}>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a href="/">Delete</a>
                  </li>
                </DropDown>
              </Edit>
            </div>

            {/* Photo */}
            <div className="photo">
              <img
                onClick={() => openModal(post)}
                className="image"
                src={post.image}
                alt=""
              />
            </div>

            <div className="action-button">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share-alt"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img className="image" src={Profile1} alt="" />
              </span>
              <span>
                <img className="image" src={Profile2} alt="" />
              </span>
              <span>
                <img className="image" src={Profile3} alt="" />
              </span>
              <p>
                Liked by <b>Hadi Soufan</b> and <b>23433 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>
                  <a href="/">hadysoufan</a>
                </b>{" "}
                {isEditMode ? post.description : editedDescription}
              </p>
            </div>

            <div className="comments text-muted"> View all 277 comments</div>
          </div>
        ))}
      </Feeds>

      {/* Modal Component */}
      {isModalOpen && modalContent && (
        <Modal isModalOpen={isModalOpen}>
          <ModalContent>
            <CloseIcon onClick={closeModal}>X</CloseIcon>
            <img
              src={modalContent.image}
              style={{ width: "100%" }}
              alt="Card"
            />
            <div className="feed-title">
              <Link to="/hive/user-profile">
                <div className="feed-into-title">
                  {userStore.user?.username}
                </div>
              </Link>
            </div>

            {isEditMode ? (
              <div className="feed-content" style={{}}>
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            ) : (
              <div className="feed-content" style={{}}>
                <div className="feed-into-content">
                  {modalContent.description}
                </div>
              </div>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default PostList;
