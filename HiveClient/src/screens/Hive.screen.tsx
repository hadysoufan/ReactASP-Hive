import React from 'react';
import HiveNav from '../components/HiveNavBar/HiveNav.component.tsx'
import LeftSection from '../components/LeftSection/LeftSection.component.jsx'
import MiddleSection from '../components/MiddleSection/MiddleSection.component.tsx'
import RightSection from '../components/RightSection/RightSection.component.jsx'
import '../asset/css/hive.styles.scss'
import HiveGlobal from '../styled/HiveGlobal.styled.js';
import { observer } from 'mobx-react-lite';
import { Post } from '../app/models/post.ts';


interface Props {
  post: Post | undefined;
}

/**
 * React component representing the main Hive page.
 * @function Hive
 * @returns {JSX.Element} The JSX representation of the Hive page.
 */
function Hive({post}: Props) {


  // useEffect( () => {
  //   agent.Posts.list().then(response => {
  //     let posts: Post[] = [];
  //     response.forEach((post) => {
  //       post.date = post.date.split("T")[0];
  //       posts.push(post);
  //     });
  //     setPosts(posts);
  //     setLoading(false);
  //   });
  // }, []);



  // if (loading) return <Loader />;

  return (
    <>
    <HiveGlobal />
      <main className='main-hive'>
        <HiveNav />

        <div className='hive-container'>
          <LeftSection />
          <MiddleSection  />
          
          <RightSection />
        </div>
      </main>

      
    </>
  )
  }


export default observer(Hive);

