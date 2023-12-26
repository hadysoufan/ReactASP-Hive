import React, { useEffect } from 'react'
import HiveNav from '../../components/HiveNavBar/HiveNav.component.tsx'
import LeftSection from '../../components/LeftSection/LeftSection.component.jsx'
import HiveGlobal from '../../styled/UserProfileGlobal.styled.js';
import ProfileHeader from './ProfileHeader.tsx';
import ProfileContent from './ProfileContent.tsx';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useStore } from '../../app/stores/store.ts';
import Loader from '../../components/Loader/Loader.component.jsx';

/**
 * A React component representing the user profile page.
 * Displays the user's navigation bar, left section, profile header, and profile content.
 * @function ProfilePage
 * @returns {JSX.Element} - The rendered ProfilePage component.
 */
function ProfilePage() {

    const {username} = useParams<{username: string}>();

    const {profileStore} = useStore();

    const {loadingProfile, loadProfile, profile} = profileStore;

    useEffect(() => {
        if(username) loadProfile(username);
    }, [loadProfile, username])

    if(loadingProfile) return <Loader />




  return (
    <>
    <HiveGlobal />
      <main className='main-hive'>
        <HiveNav  />

        <div className='hive-container'>
          <LeftSection />

            {profile && <ProfileHeader profile={profile} /> }
            
            <ProfileContent profile={profile} />
          
    
        </div>
      </main>

    </>
  )
}

export default observer(ProfilePage);
