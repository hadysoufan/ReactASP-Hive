import React, { useEffect, useState } from 'react';
import HiveNav from '../components/HiveNavBar/HiveNav.component.tsx'
import LeftSection from '../components/LeftSection/LeftSection.component.jsx'
import MiddleSection from '../components/MiddleSection/MiddleSection.component.tsx'
import RightSection from '../components/RightSection/RightSection.component.jsx'
import '../asset/css/hive.styles.scss'
import HiveGlobal from '../styled/HiveGlobal.styled.js';
import { useStore } from '../app/stores/store.ts';
import { observer } from 'mobx-react-lite';
import { Post } from '../app/models/post.ts';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

interface Props {
  post: Post | undefined;
}

/**
 * React component representing the main Hive page.
 * @function Hive
 * @returns {JSX.Element} The JSX representation of the Hive page.
 */
function Hive({post}: Props) {

  const {commonStore, userStore} = useStore();

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:5000/api/post');
        setPosts(response.data);
        console.log(response);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        if (commonStore.token) {
          userStore.getUser().finally(() => commonStore.setAppLoaded());
        } else {
          commonStore.setAppLoaded();
        }
      }
    };
  
    fetchData();
  }, [commonStore, userStore]);
  

  // function handleSelectPost(id: string){
  //   setSelectedPost(posts.find(x => x.id === id));
  // }

  // function handleCancleSelectPost(){
  //   setSelectedPost(undefined);
  // }

  // function handleFormOpen(id?: string){
  //   id ? handleSelectPost(id) : handleCancleSelectPost();
  //   setEditMode(true);
  // }

  // function handleFormClose(){
  //   setEditMode(false);
  // }


  // function handleCreateOrEditPost(post: Post){
  //   post.id 
  //     ? setPosts([...posts.filter(x => x.id !== post.id), post])
  //     : setPosts([...posts, {...post, id: uuid()}]);
  //   setEditMode(false);
  //   setSelectedPost(post);
  // }

  // function handleDeletePost(id: string){
  //   setPosts([...posts.filter(x => x.id !== id)])
  //}



  return (
    <>
    <HiveGlobal />
      <main className='main-hive'>
        <HiveNav />

        <div className='hive-container'>
          <LeftSection />
          <MiddleSection 
            posts={posts}
          />
          <RightSection />
        </div>
      </main>
    </>
  )
  }


export default observer(Hive);
