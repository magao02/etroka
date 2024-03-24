export interface User {
  created_at?: string,
  update_at?: string,
  id?: string,
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  phone: string
}

export interface Owner {
  id: string,
  name: string,
  email: string,
  city: string,
  state: string,
  phone: string,
}

export interface image {
  mimetype: string,
  size: number,
  originalname: string
}

export interface Announcement {
  created_at?: string | Date,
  update_at?: string | Date,
  category?: string,
  id: string,
  title: string,
  description: string,
  type: string,
  localization: string,
  usage_time: string,
  images: string[] | image[] | any,
  owner?:  Owner
}

export interface AnnouncementForm {
  category: string,
  title: string,
  description: string,
  type: string,
  localization?: string,
  city?: string,
  state?: string,
  usage_time?: string,
  images: any
}

export interface Favorite {
  created_at?: string | Date,
  update_at?: string | Date,
  id?: string,
  announcement: string,
  owner: string
}

export interface UpdatePassword {
  current_password: string,
  new_password: string
}

export type key = 0 | 1 | 2 | 3 | 4;
