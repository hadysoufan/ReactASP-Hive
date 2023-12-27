import React from 'react';
import Profile4 from "../../asset/img/hive/profile-4.jpg";
import Profile5 from "../../asset/img/hive/profile-5.jpg";
import Profile6 from "../../asset/img/hive/profile-6.jpg";
import Profile7 from "../../asset/img/hive/profile-7.jpg";
import Profile8 from "../../asset/img/hive/profile-8.jpg";
import Profile9 from "../../asset/img/hive/profile-9.jpg";

function Stories() {
  return (
    <>
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
    </>
  )
}

export default Stories
