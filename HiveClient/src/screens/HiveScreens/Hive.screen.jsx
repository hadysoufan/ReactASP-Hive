import React from 'react';
import HiveNav from '../../components/HiveComponents/HiveNavBar/HiveNav.component'
import LeftSection from '../../components/HiveComponents/LeftSection/LeftSection.component'
import MiddleSection from '../../components/HiveComponents/MiddleSection/MiddleSection.component'
import RightSection from '../../components/HiveComponents/RightSection/RightSection.component'
import '../../asset/css/hive.styles.scss'
import HiveGlobal from '../../styled/HiveGlobal.styled';


function Hive() {
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

export default Hive
