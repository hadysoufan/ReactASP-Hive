import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './screens/HomeScreens/Home.screen';
import Login from './screens/HomeScreens/Login.screen';
import SignUp from './screens/HomeScreens/Signup.screen';
import Hive from './screens/HiveScreens/Hive.screen';
import UserProfile from './screens/HiveScreens/UserProfile/UserProfile.screen';
import theme from './style/theme';
import EditProfile from './screens/HiveScreens/EditUserProfile/EditProfile.screen';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />

        <Route path='/hive' element={<Hive />} />

        <Route path='/hive/user-profile' element={<UserProfile/>} />
        <Route path='/hive/user-profile/edit' element={<EditProfile />} />
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
