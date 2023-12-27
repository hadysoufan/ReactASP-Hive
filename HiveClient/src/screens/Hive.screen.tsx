import React, { useState, useEffect } from 'react';
import HiveNav from '../components/HiveNavBar/HiveNav.component.tsx'
import LeftSection from '../components/LeftSection/LeftSection.component.jsx'
import MiddleSection from '../components/MiddleSection/MiddleSection.component.tsx'
import RightSection from '../components/RightSection/RightSection.component.jsx'
import '../asset/css/hive.styles.scss'
import HiveGlobal from '../styled/HiveGlobal.styled.js';
import { observer } from 'mobx-react-lite';
import { Post } from '../app/models/post.ts';
import PostDetails from '../components/PostDetails/PostDetails.component.tsx';
import agent from '../app/api/agent.ts';
import Loader from '../components/Loader/Loader.component.jsx';
;

interface Props {
  post: Post | undefined;
}

/**
 * React component representing the main Hive page.
 * @function Hive
 * @returns {JSX.Element} The JSX representation of the Hive page.
 */
function Hive({post}: Props) {

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect( () => {
    agent.Posts.list().then(response => {
      let posts: Post[] = [];
      response.forEach((post) => {
        post.date = post.date.split("T")[0];
        posts.push(post);
      });
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  function handleSelectPost(id: string){
    setSelectedPost(posts.find(x => x.id === id));
  }

  function handleCancelSelectPost(){
    setSelectedPost(undefined);
  }
  
  function handleFormOpen(id?: string) {
    id ? 
    handleSelectPost(id) 
    : handleCancelSelectPost();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditPost(post: Post){
    setSubmitting(true);
    if (post.id) {
      agent.Posts.update(post).then(() => {
        setPosts([
          ...posts.filter((x) => x.id !== post.id),
          post,
        ]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        setSubmitting(false);
      });
    } else {
      post.id = uuid();
      agent.Posts.create(post)
        .then(() => {
          setPosts([...posts, post]);
          setSelectedPost(post);
          setEditMode(false);
          setSubmitting(false);
        })
        .catch((error) => {
          console.error("Error creating post:", error);
          setSubmitting(false);
        });
    }
  }


  if (loading) return <Loader />;

  return (
    <>
    <HiveGlobal />
      <main className='main-hive'>
        <HiveNav />

        <div className='hive-container'>
          <LeftSection />
          <MiddleSection 
            posts={posts}
            selectedPost={selectedPost}
            selectPost={handleSelectPost}
            cancelSelectPost={handleCancelSelectPost}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditPost}
            submitting={submitting}
          />
          
          <RightSection />
        </div>
      </main>

      
    </>
  )
  }


export default observer(Hive);

function uuid(): any {
  throw new Error('Function not implemented.');
}
