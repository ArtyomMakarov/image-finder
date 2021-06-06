export interface IFlickrPhoto {
  id: string,
  owner: string;
  secret: string;
  server: string;
  title: string;
  farm: string;
  ispublic: number;
  isfriend: number;
  isfamily: number
}
