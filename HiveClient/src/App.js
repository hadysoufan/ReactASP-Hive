import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Importing Screens
import Home from "./screens/HomeScreens/Home.screen";
import Login from "./screens/HomeScreens/Login.screen.tsx";
import SignUp from "./screens/HomeScreens/Signup.screen";
import Hive from "./screens/HiveScreens/Hive.screen";
import UserProfile from "./screens/HiveScreens/UserProfile/UserProfile.screen";
import EditProfile from "./screens/HiveScreens/EditUserProfile/EditProfile.screen";
import Activities from "./screens/HiveScreens/Activities/Activities.screen.tsx";
import TestErrors from "./features/errors/TestError.tsx";

// Importing Styles and Theme
import theme from "./styled/theme";

/**
 * Main App component that defines routes using React Router.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <ToastContainer position="top-start" />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route path="/hive" element={<Hive />} />

            <Route path="/hive/user-profile" element={<UserProfile />} />
            <Route path="/hive/user-profile/edit" element={<EditProfile />} />

            {/* <Route path='/hive/create-post' element={<CreatePost />} /> */}

            <Route path="/hive/activities" element={<Activities />} />

            <Route path="/errors" element={<TestErrors />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
