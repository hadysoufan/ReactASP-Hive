import React from 'react';
import '../../asset/css/hive.styles.scss';
import './RightSection.component.styles.jsx';
import Profile1 from '../../asset/img/hive/profile-1.jpg';
import Profile2 from '../../asset/img/hive/profile-2.jpg';

import { Right, Message, FriendRequest } from './RightSection.component.styles.jsx'

function RightSection() {
  return (
    <>
      {/* Right screen side */}
      <Right>
        {/* Messages */}
        <Message>
          {/* Heading */}
          <div className="heading">
            <h4>Messages</h4>
            <i className="uil uil-edit"></i>
          </div>

          {/* Search bar */}
          <div className="search-bar">
            <input className='.input' type="search" placeholder="search messages" id="message-search" />
          </div>

          {/* Messages category */}
          <div className="category">
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="message-requests">Request(7)</h6>
          </div>

          {/* Messages */}
          {/* Message 1 */}
          <div className="message">
            <div className="profile-picture">
              <img className='image' src={Profile1} alt="ProfileImage" />
              <div className="active"></div>
            </div>
            <div className="message-body">
              <h5>Hadi Soufan</h5>
              <p className="text-bold">2 new messages</p>
            </div>
          </div>

          {/* Message 3 */}
          <div className="message">
            <div className="profile-picture">
              <img className='image' src={Profile2} alt="ProfileImage" />
              <div className="active"></div>
            </div>
            <div className="message-body">
              <h5>Zayn Cenry</h5>
              <p className="text-muted">Hello how are you</p>
            </div>
          </div>
        </Message>

        {/* Friend request */}
        <FriendRequest>
          <h4>Suggestions</h4>

          {/* Request 1 */}
          <div className="request">
            <div className="info">
              <div className="profile-picture">
                <img className='image' src={Profile1} alt="DefaultImg" />
              </div>
              <div>
                <a href="/">
                  <h5>hadysoufan</h5>
                </a>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn-hive btn-primary-hive">Follow</button>
            </div>
          </div>

          {/* Request 2 */}
          <div className="request">
            <div className="info">
              <div className="profile-picture">
                <img className='image' src={Profile2} alt="DefaultImg" />
              </div>
              <div>
                <a href="/">
                  <h5>hadysoufan</h5>
                </a>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn-hive btn-primary-hive">Follow</button>
            </div>
          </div>
        </FriendRequest>
      </Right>
      {/* End of right section */}
    </>
  );
}

export default RightSection;
