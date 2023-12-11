import React from 'react';
import '../../../asset/css/hive.styles.scss';
import './MiddleSection.component.styles.jsx';
import DefaultImg from '../../../asset/img/hive/default.png';
import Feed1 from '../../../asset/img/hive/feed-1.jpg';
import Profile1 from '../../../asset/img/hive/profile-1.jpg';
import Profile2 from '../../../asset/img/hive/profile-2.jpg';
import Profile3 from '../../../asset/img/hive/profile-3.jpg';
import Profile4 from '../../../asset/img/hive/profile-4.jpg';
import Profile5 from '../../../asset/img/hive/profile-5.jpg';
import Profile6 from '../../../asset/img/hive/profile-6.jpg';
import Profile7 from '../../../asset/img/hive/profile-7.jpg';
import Profile8 from '../../../asset/img/hive/profile-8.jpg';
import Profile9 from '../../../asset/img/hive/profile-9.jpg';

import { Middle, DropDown, Edit } from './MiddleSection.component.styles.jsx';

function MiddleSection() {
  return (
    <>
      {/* Middle screen side */}
      <Middle>
        {/* Stories */}
        <div className="stories">
          {/* Story 1 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile4} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 2 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile5} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 3 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile6} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 4 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile7} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 5 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile8} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>

          {/* Story 6 */}
          <div className="story">
            <div className="profile-picture">
              <img className='image' src={Profile9} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>
        </div>
        {/* End of stories */}

        {/* Create post section */}
        <form action="" className="create-post">
          <div className="profile-picture">
            <img className='image' src={DefaultImg} alt="avatar" />
          </div>
          <input className='input-create' type="text" name="image_upload" placeholder="create a post" id="create-post" />
          <input type="submit" value="Post" className="btn-hive btn-primary-hive" />
        </form>

        {/* Feeds section */}
        <div className="feeds">
          {/* Feed 1 */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img className='image' src={DefaultImg} alt="avatar" />
                </div>
                <div className="info">
                  <h3>
                    <a href="/user-profile">hadysoufan</a>
                  </h3>
                  <small>5 hours ago</small>
                </div>
              </div>
              <Edit>
                <i className="uil uil-ellipsis-h"></i>
                <DropDown>
                  <li>
                    <a href="/">Edit</a>
                  </li>
                  <li>
                    <a href="/">Delete</a>
                  </li>
                </DropDown>
              </Edit>
            </div>
            <a href="/">
              <div className="photo">
                <img className='image' src={Feed1} alt="" />
              </div>
            </a>
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
                <img className='image' src={Profile1} alt="" />
              </span>
              <span>
                <img className='image' src={Profile2} alt="" />
              </span>
              <span>
                <img className='image' src={Profile3} alt="" />
              </span>
              <p>
                Liked by <b>Hadi Soufan</b> and <b>23433 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>
                  <a href="/">hadysoufan</a>
                </b>{' '}
                hello
              </p>
            </div>
            <div className="comments text-muted"> View all 277 comments</div>
          </div>
        </div>
      </Middle>
      {/* End of middle section */}
    </>
  );
}

export default MiddleSection;
