/* eslint-disable max-len */
import CoreService from './core';
import {AxiosResponse} from 'axios';
import {User} from 'types';
import {UpdatePassword} from 'types';
class UserService extends CoreService {
  private baseRoute = '/users';

  async getUserById(userId: string): Promise<AxiosResponse | null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}`;
      const response = await this.getApi().get(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async updateUser(data: User, userId: string): Promise< AxiosResponse| null > {
    try {
      const customRoute = `${this.baseRoute}/${userId}`;
      const response = await this.getApi().put(customRoute, data);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async deleteUser(userId: string): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}`;
      const response = await this.getApi().delete(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async createUser(data: User): Promise<AxiosResponse | null > {
    try {
      const response = await this.getApi().post(this.baseRoute, data);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async updatePassword(userId: string, data: UpdatePassword): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/password`;
      const response = await this.getApi().patch(customRoute, data);
      return response;
    } catch (error) {
      //
    }
    return null;
  }


  async createAnnouncement(userId: string, data): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/announcements`;
      const formData = new FormData();
      console.log(data.usage_time);
      console.log(data);
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('localization', data.localization);
      formData.append('type', data.type);
      formData.append('images', data.images[0]);
      formData.append('usage_time', data.usage_time);
      const response = await this.getApi().post(customRoute, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
    return null;
  }


  async getUserAnnouncements(userId: string): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/announcements`;
      const response = await this.getApi().get(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async addImageOnAnnouncement(userId: string, announcementId: string, image: string): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/announcements/${announcementId}/images`;
      const response = await this.getApi().patch(customRoute, image);
      return response;
    } catch (error) {

      //
    }
    return null;
  }

  async getUserAnnouncementById(userId: string, announcementId: string): Promise<AxiosResponse|null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/announcements`;
      const response = await this.getApi().get(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async addFavorite(userId: string, data: any): Promise<AxiosResponse | null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/favorites`;
      console.log(data);
      const response = await this.getApi().post(customRoute, data);
      return response;
    } catch (error) {
      //
    }
    return null;
  }


  async getFavorites(userId: string): Promise<AxiosResponse | null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/favorites`;
      const response = await this.getApi().get(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async getFavoriteById(userId: string, favoriteId: string): Promise<AxiosResponse | null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/favorites/${favoriteId}`;
      const response = await this.getApi().get(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async deleteFavoriteById(userId: string, favoriteId: string): Promise<AxiosResponse | null> {
    try {
      const customRoute = `${this.baseRoute}/${userId}/favorites/${favoriteId}`;
      const response = await this.getApi().delete(customRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }
}

export default UserService;
