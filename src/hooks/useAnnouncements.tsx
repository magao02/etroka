/* eslint-disable max-len */
import {useState} from 'react';
import {Announcement} from 'types';
import AnnouncementService from 'services/Announcement';

function useAnnouncements() {
  const [announcement, setAnnouncement] = useState<Announcement>();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const announcementService = new AnnouncementService();

  async function fetchAnnouncementById(id:string) {
    try {
      const response = await announcementService.getAnnouncementById(id);
      setAnnouncement(response?.data as unknown as Announcement);
    } catch (error) {
      //
    }
  }

  async function fetchFavorites(id:string) {
    try {
      const response = await announcementService.getFavorites(id);
      setAnnouncements(response?.data as Announcement[]);
    } catch (error) {
      //
    }
  }

  async function fetchMyAds(id: string) {
    try {
      const response = await announcementService.getMyAds(id);
      setAnnouncements(response?.data as Announcement[]);
    } catch (error) {
      //
    }
  }

  async function fetchAnnouncements() {
    try {
      const response = await announcementService.getAnnouncements();
      setAnnouncements(response?.data as Announcement[]);
    } catch (error) {
      //
    }
  }


  return {
    announcement,
    announcements,
    fetchAnnouncements,
    fetchAnnouncementById,
    fetchFavorites,
    fetchMyAds,
  };
}

export default useAnnouncements;
