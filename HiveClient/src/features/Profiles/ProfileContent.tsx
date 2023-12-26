import React from "react";
import * as User from "../../screens/UserProfile/UserProfile.screen.styles.jsx";
import ProfilePhotos from "./ProfilePhotos.tsx";
import { Profile } from "../../app/models/profile.js";
import { observer } from "mobx-react-lite";

/**
 * Props for the ProfileContent component.
 * @interface Props
 * @property {Profile} profile - The user profile to be displayed in the content.
 */
interface Props {
  profile: Profile;
}

/**
 * A React component representing the content of a user's profile.
 * Includes user stories and profile photos.
 * @function ProfileContent
 * @param {Props} props - The properties of the ProfileContent component.
 * @returns {JSX.Element} - The rendered ProfileContent component.
 */

function ProfileContent({profile}: Props) {
  return (
    <>
      <User.UserStories>
        <User.UserStoriesInner>
          <User.StoryWrapper>
            <User.StoryInner>
              <User.StoryImg
                src="https://images.unsplash.com/photo-1588110679566-158c6dea107c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1990&q=80"
                alt=""
              />
              <User.Gradient></User.Gradient>
            </User.StoryInner>
            <h2>Outfits ✌</h2>
          </User.StoryWrapper>
          <User.StoryWrapper>
            <User.StoryInner>
              <User.StoryImg
                src="https://images.unsplash.com/photo-1470472304068-4398a9daab00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <User.Gradient></User.Gradient>
            </User.StoryInner>
            <h2>Travel 🛫</h2>
          </User.StoryWrapper>
          <User.StoryWrapper>
            <User.StoryInner>
              <User.StoryImg
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
                alt=""
              />
              <User.GradientGray></User.GradientGray>
            </User.StoryInner>
            <h2>Food 🍕</h2>
          </User.StoryWrapper>
          <User.StoryWrapper>
            <User.StoryInner>
              <User.StoryImg
                src="https://images.unsplash.com/photo-1586462175816-c0e709898f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <User.GradientGray></User.GradientGray>
            </User.StoryInner>
            <h2>Windlife 🌲</h2>
          </User.StoryWrapper>
          <User.StoryWrapper>
            <User.StoryInner>
              <User.StoryImg
                src="https://images.unsplash.com/photo-1583314580204-efe0bcd18bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <User.GradientGray></User.GradientGray>
            </User.StoryInner>
            <h2>Relax 📚</h2>
          </User.StoryWrapper>
        </User.UserStoriesInner>
      </User.UserStories>

      <ProfilePhotos profile={profile} />

      
    </>
  );
}

export default observer(ProfileContent);
