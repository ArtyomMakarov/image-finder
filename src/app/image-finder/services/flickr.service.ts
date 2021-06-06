import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFlickrResponse} from '../models/flickr-response.model';
import {map} from 'rxjs/operators';
import {IFlickrPhoto} from '../models/flickr-photo.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class FlickrService {

  constructor(private http: HttpClient) { }

  public search_keyword(keyword: string): Observable<Array<{[key: string]: string}>> {
    const params: string = `$text=${keyword}&format=json&nojsoncallback=1`;

    return this.http.get(params).pipe(
      map((res: any): Array<{[key: string]: string}> => {
        const urlArr: Array<{[key: string]: string}> = [];

        res.photos.photo.forEach((ph: IFlickrPhoto) => {
          const photoObj = {
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
