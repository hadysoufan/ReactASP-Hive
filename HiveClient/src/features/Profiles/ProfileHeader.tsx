import React from "react";
import * as User from "../../screens/UserProfile/UserProfile.screen.styles.jsx";
import DefaultImg from "../../asset/img/hive/default.png";
import { Link } from "react-router-dom";
import { Profile } from "../../app/models/profile.js";
import { observer } from "mobx-react-lite";

/**
 * Props for the ProfileHeader component.
 * @interface Props
 * @property {Profile} profile - The user profile data to be displayed in the header.
 */
interface Props {
  profile: Profile;
}

/**
 * A React component representing the header section of a user's profile.
 * Displays the user's profile image, username, edit profile button, post count,
 * follower count, following count, display name, and bio.
 * @function ProfileHeader
 * @param {Props} props - The properties of the ProfileHeader component.
 * @returns {JSX.Element} - The rendered ProfileHeader component.
 */
function ProfileHeader({profile}: Props) {
  return (
    <>
      <User.UserHeaderWrapper>
        <User.UserHeaderInner>
          <User.UhLeft>
            <User.UhImage>
              <User.UhImageInner src={profile.image || DefaultImg} alt="DefaultImage" />
              <User.Gradient></User.Gradient>
            </User.UhImage>
          </User.UhLeft>
          <User.UhRight>
            <User.UserInfo>
              <h3>{profile.username}</h3>
              <Link to="/hive/user-profile/edit">
                <User.EditBtn>Edit Profile</User.EditBtn>
              </Link>
            </User.UserInfo>
            <User.UserLinks>
              <Link to="">
                <span>2.1k</span> Posts
              </Link>
              <Link to="">
                <span>421k</span> Followers
              </Link>
              <Link to="">
                Following <span>388</span>
              </Link>
            </User.UserLinks>
            <div className="user-bio">
              <User.UserBioName>{profile.displayName}</User.UserBioName>
              <p>{profile.bio || 'Software Developer'}</p>
            </div>
          </User.UhRight>
        </User.UserHeaderInner>
      </User.UserHeaderWrapper>
    </>
  );
}

export default observer(ProfileHeader);
