import React, { useEffect } from 'react';
import HiveNav from '../../components/HiveComponents/HiveNavBar/HiveNav.component.tsx'
import LeftSection from '../../components/HiveComponents/LeftSection/LeftSection.component'
import MiddleSection from '../../components/HiveComponents/MiddleSection/MiddleSection.component'
import RightSection from '../../components/HiveComponents/RightSection/RightSection.component'
import '../../asset/css/hive.styles.scss'
import HiveGlobal from '../../styled/HiveGlobal.styled';
import { useStore } from '../../app/stores/store.ts';
import { observer } from 'mobx-react-lite';

/**
 * React component representing the main Hive page.
 * @function Hive
 * @returns {JSX.Element} The JSX representation of the Hive page.
 */
function Hive() {

  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])


  return (
    <>
    <HiveGlobal />
      <main className='main-hive'>
        <HiveNav />

        <div className='hive-container'>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </main>
    </>
  )
}

export default observer(Hive);
