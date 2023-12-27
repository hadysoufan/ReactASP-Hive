import React, { useEffect } from "react";
import $ from "jquery";
import { Link, useParams } from "react-router-dom";
import HiveNav from "../../components/HiveNavBar/HiveNav.component.tsx";
import DefaultImg from "../../asset/img/hive/default.png";
import LeftSection from "../../components/LeftSection/LeftSection.component.jsx";
import UserProfileGlobal from "../../styled/UserProfileGlobal.styled.js";
import * as User from "./UserProfile.screen.styles.jsx";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import Loader from "../../components/Loader/Loader.component.jsx";
import { Profile } from "../../app/models/profile.ts";

interface Props {
  profile: Profile;
  openForm: () => void;
}

/**
 * React component representing the user profile page.
 * @function UserProfile
 * @returns {JSX.Element} The JSX representation of the user profile page.
 */
function UserProfile({ profile: userProfile, openForm }: Props) {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile } = profileStore;

  useEffect(() => {
    loadProfile(username!);
  }, [loadProfile, username]);

  if (loadingProfile) return <Loader />;

  return (
    <>
      <UserProfileGlobal />
      <main className="main-hive">
        <HiveNav openForm={openForm} />
        <div className="hive-container">
          <LeftSection />

          <User.UserHeaderWrapper>
            <User.UserHeaderInner>
              <User.UhLeft>
                <User.UhImage>
                  <User.UhImageInner
                    src={profile?.image || DefaultImg}
                    alt="DefaultImage"
                  />
                  <User.Gradient></User.Gradient>
                </User.UhImage>
              </User.UhLeft>
              <User.UhRight>
                <User.UserInfo>
                  <h3>{profile?.username}</h3>
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
                  <User.UserBioName>{profile?.displayName}</User.UserBioName>
                  <p>{profile?.bio || "Bio"}</p>
                </div>
              </User.UhRight>
            </User.UserHeaderInner>
          </User.UserHeaderWrapper>

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

          <User.UserPageWrapper>
            <User.UserPageInner>
              <User.ImageBlock id="imgblock1">
                <User.Block>
                  <User.Img
                    src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
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
                  src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                  alt=""
                />
              </User.ImageWapper>
            </User.UserPageInner>

            <User.UserPageInner>
              <User.ImageBlock id="imgblock1">
                <User.Block>
                  <User.Img
                    src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
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
                  src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                  alt=""
                />
              </User.ImageWapper>
            </User.UserPageInner>

            <User.UserPageInner>
              <User.ImageBlock id="imgblock1">
                <User.Block>
                  <User.Img
                    src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
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
                  src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                  alt=""
                />
              </User.ImageWapper>
            </User.UserPageInner>
          </User.UserPageWrapper>
        </div>
      </main>
    </>
  );
}

export default observer(UserProfile);
