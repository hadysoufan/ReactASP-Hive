import React, {useEffect} from "react";
import * as User from "../../screens/UserProfile/UserProfile.screen.styles.jsx";
import DefaultImg from "../../asset/img/hive/default.png";
import { Link } from "react-router-dom";
import { Profile } from "../../app/models/profile.js";
import { observer, useLocalObservable } from "mobx-react-lite"
import { useStore } from "../../app/stores/store.ts";
import FollowButton from "./FollowButton.tsx";
import { reaction } from "mobx";

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
function ProfileHeader({ profile }: Props) {
  const { userStore, profileStore } = useStore();

  const localProfile = useLocalObservable(() => ({
    ...profile, 
    followersCount: profile.followersCount,
    followingCount: profile.followingCount,
    following: profile.following
  }));

  useEffect(() => {
    const dispose = reaction(
      () => ({
        followersCount: profileStore.profile?.followersCount!,
        followingCount: profileStore.profile?.followingCount!,
        following: profileStore.profile?.following!,
      }),
      (updatedProfile) => {
        if (updatedProfile) {
          localProfile.followersCount = updatedProfile.followersCount;
          localProfile.followingCount = updatedProfile.followingCount;
          localProfile.following = updatedProfile.following;
        }
      }
    );
    return () => dispose();
  }, [profileStore.profile, localProfile]);
  

  return (
    <>
      <User.UserHeaderWrapper>
        <User.UserHeaderInner>
          <User.UhLeft>
            <User.UhImage>
              <User.UhImageInner
                src={profile.image || DefaultImg}
                alt="DefaultImage"
              />
              <User.Gradient></User.Gradient>
            </User.UhImage>
          </User.UhLeft>
          <User.UhRight>
            <User.UserInfo>
              <h3>{profile.username}</h3>
              <Link to="/hive/user-profile/edit">
                {userStore.user?.username === profile.username ? (
                  <User.EditBtn>Edit Profile</User.EditBtn>
                ) : (
                  <FollowButton profile={profile} />
                )}
              </Link>
            </User.UserInfo>
            <User.UserLinks>
              <Link to="">
                <span>3</span> Posts
              </Link>
              <Link to={`/hive/${profile.username}/following`}>
                <span>{localProfile.followersCount}</span> Followers
              </Link>
              <Link to={`/hive/${profile.username}/following`}>
                <span>{localProfile.followingCount}</span> Following 
              </Link>
            </User.UserLinks>
            <div className="user-bio">
              <User.UserBioName>{profile.displayName}</User.UserBioName>
              <p>{profile.bio || "Software Developer"}</p>
            </div>
          </User.UhRight>
        </User.UserHeaderInner>
      </User.UserHeaderWrapper>
    </>
  );
}

export default observer(ProfileHeader);
