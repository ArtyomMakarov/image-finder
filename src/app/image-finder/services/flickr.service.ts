import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IFlickrPhoto} from '../models/flickr-photo.model';
import {Observable} from 'rxjs/internal/Observable';
import {IPhotoCard} from '../models/photo-card.model';

@Injectable()
export class FlickrService {

  public pages!: number;

  constructor(private http: HttpClient) { }

  public search_keyword(keyword: string, pageSize: number, pageIndex: number): Observable<Array<IPhotoCard>> {
    const params: string = `text=${keyword}&format=json&nojsoncallback=1&per_page=${pageSize}&page=${pageIndex}`;

    return this.http.get(params).pipe(
      map((res: any): Array<IPhotoCard> => {
        const urlArr: Array<IPhotoCard> = [];
        this.pages = res.photos.pages;

        res.photos.photo.forEach((ph: IFlickrPhoto, index: number) => {
          const photoObj = {
            id: index,
            url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_z.jpg`,
            title: ph.title
           };

          urlArr.push(photoObj);
        });

        return urlArr;
    })
    )
  }
}
