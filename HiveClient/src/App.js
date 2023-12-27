import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

// Importing Screens
import Home from "./screens/Home.screen";
import Login from "./screens/Login.screen.tsx";
import SignUp from "./screens/Signup.screen";
import Hive from "./screens/Hive.screen.tsx";
import EditProfile from "./screens/EditUserProfile/EditProfile.screen";
import Activities from "./screens/Activities.screen.tsx";
import TestErrors from "./features/errors/TestError.tsx";


// Importing Styles and Theme
import theme from "./styled/theme";
import PostDetails from "./components/PostDetails/PostDetails.component.tsx";
import Loader from "./components/Loader/Loader.component.jsx";
import PostForm from "./components/PostForm/PostForm.component.tsx";
import ActivityDetails from "./components/ActivityDetails/ActivityDetails.tsx";
import ActivityForm from './components/ActivityForm/ActivityForm.tsx';
import ProfilePage from "./features/Profiles/ProfilePage.tsx";
import Posts from "./screens/Posts.screen.tsx";
import PhotoUploadWidget from "./common/imageUpload/PhotoUploadWidget.tsx";


/**
 * Main App component that defines routes using React Router.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route path="/hive" element={<Hive />} />

            <Route path="/hive/user-profile/:username" element={<ProfilePage />} />
            <Route path="/hive/user-profile/edit" element={<EditProfile />} />

           <Route path="/hive/post-details/:id" element={<PostDetails />} />
           <Route path="/hive/create-post" element={<PostForm />} key='create' />
           <Route path="/hive/manage-post/:id" element={<PostForm />} key='manage'/>

            <Route path="/hive/activities" element={<Activities />} />
            <Route path="/hive/create-activity" element={<ActivityForm key='create'/>} />
            <Route path="/hive/activity/manage/:id" element={<ActivityForm key='manage'/>} />
            <Route path="/hive/activity/:id" element={<ActivityDetails />} />

            <Route path="/errors" element={<TestErrors />} />

            <Route path="/hive/loader" element={<Loader />} />

            <Route path="/hive/create" element={<PhotoUploadWidget />} />

            <Route path="/posts" element={<Posts />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
