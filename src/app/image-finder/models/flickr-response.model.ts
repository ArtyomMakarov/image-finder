import {IFlickrPhoto} from './flickr-photo.model';

export interface IFlickrResponse {
  photos: {
    page: number,
    pages: number,
    perpage: number,
    total: string,
    photo: [IFlickrPhoto]
  },
  stat: string
}
