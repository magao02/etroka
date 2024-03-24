/* eslint-disable max-len */

import React from 'react';
import UserService from 'services/user';
import {AxiosResponse} from 'axios';
import {AnnouncementForm} from 'types';
import {User} from 'types';


function useUsers() {
  const [user, setUser] = React.useState<User | null>(null);
  const [users, setUsers] = React.useState<User[] | null>(null);
  const userService = new UserService();

  async function fetchUserById(id: string) {
    try {
      const response = await userService.getUserById(id);
      setUser(response?.data);
    } catch (error) {
      //
    }
  }

  async function createUser(user:User): Promise<AxiosResponse|null> {
    try {
      const response = await userService.createUser(user);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async function createAnnouncement(userId: string, data:AnnouncementForm): Promise<AxiosResponse|null> {
    try {
      const response = await userService.createAnnouncement(userId, data);
      return response;
    } catch (error) {
      console.log('erro');
      console.log('erro :'+error);
    }
    return null;
  }
  async function addFavorite(userId: string, data:any): Promise<AxiosResponse|null> {
    try {
      const response = await userService.addFavorite(userId, data);
      console.log(response);
      return response;
    } catch (error) {
      console.log('erro');
      console.log('erro :'+error);
    }
    return null;
  }


  return {
    user,
    users,
    setUser,
    setUsers,
    createUser,
    fetchUserById,
    createAnnouncement,
    addFavorite,
  };
}


export default useUsers;
