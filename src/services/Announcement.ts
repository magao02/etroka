import CoreService from './core';
import {AxiosResponse} from 'axios';

class AnnouncementService extends CoreService {
  private baseRoute = '/announcements';

  // eslint-disable-next-line max-len
  async getAnnouncementById(id: string): Promise<AxiosResponse | null> {
    try {
      const response = await this.getApi().get(`${this.baseRoute}/${id}`);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async getAnnouncements(): Promise< AxiosResponse | null > {
    try {
      const response = await this.getApi().get(this.baseRoute);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async getFavorites(id: string): Promise< AxiosResponse | null > {
    try {
      const response = await this.getApi().get(`/users/${id}/favorites`);
      return response;
    } catch (error) {
      //
    }
    return null;
  }

  async getMyAds(id: string): Promise<AxiosResponse | null> {
    try {
      const response = await this.getApi().get(`/users/${id}/announcements`);
      return response;
    } catch (error) {
      //
    }
    return null;
  }
}

export default AnnouncementService;
