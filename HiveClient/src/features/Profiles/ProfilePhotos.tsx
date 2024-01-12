import React from 'react';
import * as User from "../../screens/UserProfile/UserProfile.screen.styles.jsx";
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile.ts';

interface Props{
    profile: Profile
}

/**
 * A React component for displaying user photos in a profile.
 * @component
 * @param {Props} props - The component properties.
 * @param {Profile} props.profile - The user profile for which to display photos.
 */
function ProfilePhotos({profile}: Props) {



  if (!profile || !profile.photos) {
    return null;
  }

  return (
    <>
    
        <User.UserPageWrapper>

        {profile.photos?.map(photo => (
            <User.UserPageInner key={photo.id}>
            <User.ImageBlock id="imgblock1">
              <User.Block key={photo.id}>
                <User.Img
                  src={photo.url}
                  alt=""
                />
              </User.Block>
              <User.BlockBg id="imgblockbc1"></User.BlockBg>
            </User.ImageBlock>
            <User.ImageWapper id="img1">
              <User.ImgOverLayWrapper id="iov1">
                <User.ImgBtns>
                  <p>
                    465 <i className="uil uil-heart-alt"></i> &nbsp&nbsp 25{" "}
                    <i className="uil uil-comment"></i>
                  </p>
                </User.ImgBtns>
                <User.ImgOverLay></User.ImgOverLay>
              </User.ImgOverLayWrapper>
              <User.Img
                src={photo.url}
                alt=""
              />
            </User.ImageWapper>
          </User.UserPageInner>
        ))}
        

      </User.UserPageWrapper>
    </>
  )
}

export default observer(ProfilePhotos);
