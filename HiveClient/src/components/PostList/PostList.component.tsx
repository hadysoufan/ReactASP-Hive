import React, { useState, useEffect } from "react";
import { Feeds } from "./PostList.component.styles";
import { Link } from "react-router-dom";
import DefaultImg from "../../asset/img/hive/default.png";
import Profile1 from "../../asset/img/hive/profile-1.jpg";
import Profile2 from "../../asset/img/hive/profile-2.jpg";
import Profile3 from "../../asset/img/hive/profile-3.jpg";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import Loader from '../Loader/Loader.component.jsx';
import { Photo } from "../../app/models/photos.ts";

interface Props{
  photos: Photo[] ;
}

function PostList({photos}: Props) {
  return (
    <>
      <Feeds>
        
        {photos.map((photo) => (
          <div className="feed" key={photo.id}>
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img
                    className="profile-image-post"
                    src={DefaultImg}
                    alt="avatar"
                  />
                </div>
                <div className="info">
                  <h3>
                    <Link to="/hive/user-profile">{photo.owner}</Link>
                  </h3>
                  <small>{photo.date}</small>
                </div>
              </div>
            </div>

            {/* Photo */}
            <Link to={`/hive/photo-details/${photo.id}`}>
              <div className="photo">
                <img className="image" src={photo.url} alt="" />
              </div>
            </Link>

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
                {photo.description}
              </p>
            </div>
            <div className="comments text-muted"> View all 277 comments</div>
          </div> 
          ))}
      </Feeds>
    </>
  );
}

export default observer(PostList);
