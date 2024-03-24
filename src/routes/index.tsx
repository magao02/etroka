import React from 'react';
import {Routes as Switch, Route, Navigate} from 'react-router-dom';

/* Pages */
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Recover from 'pages/Recover';
import PasswordReset from 'pages/PasswordReset';
import Profile from 'pages/Profile';
import CreateAnnouncement from 'pages/CreateAnnouncement';
import Announcement from 'pages/Announcement';
import Announcements from 'pages/Announcements';
import Favorites from 'pages/Favorites';
import MyAds from 'pages/MyAds';
import Chats from 'pages/Chats';
import RegisterNewPassword from 'pages/RegisterNewPassword';
import Books from 'pages/Books';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={ <Navigate to='/SignIn' /> } />
      <Route path="/SignIn" element={ <SignIn /> } />
      <Route path="/SignUp" element={ <SignUp /> } />
      <Route path="/recover" element={ <Recover />} />
      <Route path="/passwordreset" element={ <PasswordReset />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateAnnouncement/>} />
      <Route path="/announcement/:id" element={<Announcement/>} />
      <Route path="/announcements" element={<Announcements/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/livros" element={<Books/>} />
      <Route path="/MeusAnuncios" element={ <MyAds/> } />
      <Route path="/chats" element={ <Chats/> } />
      <Route path="/registernewpassword" element={ <RegisterNewPassword/> } />
    </Switch>
  );
};

export default Routes;
