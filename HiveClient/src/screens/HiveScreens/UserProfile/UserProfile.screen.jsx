import React, {useEffect} from 'react';
import $ from 'jquery';
import './UserProfile.screen.styles.jsx';
import { Link } from 'react-router-dom'

import HiveNav from '../../../components/HiveComponents/HiveNavBar/HiveNav.component';

import { UserHeaderWrapper,
         UserHeaderInner,
         UhLeft,
         UhImage,
         UhImageInner,
         Gradient,
         GradientGray,
         UhRight,
         UserInfo,
         EditBtn,
         UserLinks,
         UserBioName,
         UserStoriesInner,
         UserStories,
         StoryWrapper,
         StoryInner,
         StoryImg,
         UserPageWrapper,
         UserPageInner,
         ImageWapper,
         Img,
         ImgOverLayWrapper,
         ImgBtns,
         ImgOverLay,
         ImageBlock,
         Block,
         BlockBg
} from './UserProfile.screen.styles.jsx';


import DefaultImg from '../../../asset/img/hive/default.png';



function UserProfile() {

    useEffect(() => {
        const addImageHoverLogic = (imgId, iovId) => {
          $(`#${imgId}`).on({
            mouseenter: function () {
              $(`#${iovId}`).css("opacity", "1");
            },
            mouseleave: function () {
              $(`#${iovId}`).css("opacity", "0");
            },
          });
        };
    
        const addImageClickLogic = (imgId, blockId) => {
          $(`#${imgId}`).click(function () {
            $(`#${blockId}`).css("display", "flex");
          });
        };
    
        const addBlockBackgroundClickLogic = (blockId) => {
          $(`#${blockId}`).click(function () {
            $(`#${blockId}`).css("display", "none");
          });
        };
    
        for (let i = 2; i <= 9; i++) {
          const imgId = `img${i}`;
          const iovId = `iov${i}`;
          const blockId = `imgblock${i}`;
          const blockBgId = `imgblockbc${i}`;
    
          addImageHoverLogic(imgId, iovId);
          addImageClickLogic(imgId, blockId);
          addBlockBackgroundClickLogic(blockBgId);
        }
      }, []); 


  return (
    <>
    <HiveNav />
    <UserHeaderWrapper>
    <UserHeaderInner>
        <UhLeft>
            <UhImage>
            <UhImageInner src={DefaultImg} alt="DefaultImage" />
                <Gradient></Gradient>
            </UhImage>


        </UhLeft>
        <UhRight>
            <UserInfo>
                <h3>
                    Hadi Soufan
                </h3>
                <Link to='/hive/user-profile/edit'>
                    <EditBtn >Edit Profile</EditBtn>
                </Link>


            </UserInfo>
            <UserLinks>
                <a href='/'><span>2.1k</span> Posts</a>
                <a href='/'><span>421k</span> Followers</a>
                <a href='/'>Following <span>388</span></a>
            </UserLinks>
            <div class="user-bio">
                <UserBioName>Hadi Soufan</UserBioName>
                <p>Bio</p>
            </div>
        </UhRight>
    </UserHeaderInner>
</UserHeaderWrapper>
<UserStories>
    <UserStoriesInner>
        <StoryWrapper>
            <StoryInner>
                <StoryImg src="https://images.unsplash.com/photo-1588110679566-158c6dea107c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1990&q=80" alt=""/>
                <Gradient></Gradient>
            </StoryInner>
            <h2>Outfits ✌</h2>
        </StoryWrapper>
        <StoryWrapper>
            <StoryInner>
                <StoryImg src="https://images.unsplash.com/photo-1470472304068-4398a9daab00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                <Gradient></Gradient>
            </StoryInner>
            <h2>Travel 🛫</h2>
        </StoryWrapper>
        <StoryWrapper>
            <StoryInner>
                <StoryImg src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt="" />
                <GradientGray></GradientGray>
            </StoryInner>
            <h2>Food 🍕</h2>
        </StoryWrapper>
        <StoryWrapper>
            <StoryInner>
                <StoryImg src="https://images.unsplash.com/photo-1586462175816-c0e709898f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=1950&q=80" alt="" />
                <GradientGray></GradientGray>
            </StoryInner>
            <h2>Windlife 🌲</h2>
        </StoryWrapper>
        <StoryWrapper>
            <StoryInner>
                <StoryImg src="https://images.unsplash.com/photo-1583314580204-efe0bcd18bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                <GradientGray></GradientGray>
            </StoryInner>
            <h2>Relax 📚</h2>
        </StoryWrapper>
    </UserStoriesInner>
</UserStories>

<UserPageWrapper>
    <UserPageInner>
        <ImageBlock id="imgblock1">
            <Block>
                <Img src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
            </Block>
            <BlockBg id="imgblockbc1"></BlockBg>
        </ImageBlock>

        <ImageWapper id="img1">
            <ImgOverLayWrapper id="iov1">
                <ImgBtns>
                    <p>465 <i class="uil uil-heart-alt"></i> &nbsp&nbsp 25 <i class="uil uil-comment"></i></p>
                </ImgBtns>
                <ImgOverLay></ImgOverLay>
            </ImgOverLayWrapper>
            <Img src="https://images.unsplash.com/photo-1559056986-f834be7896e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
        </ImageWapper>
    </UserPageInner>
</UserPageWrapper>
    </>
  )
}

export default UserProfile
