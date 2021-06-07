import { Injectable } from '@angular/core';
import {IPhotoCard} from '../models/photo-card.model';

@Injectable()
export class BookmarkService {
  private bookmarks: Array<IPhotoCard> = [];

  constructor() { }

  public addToBookmarks(photo: IPhotoCard): void {
    this.bookmarks.push(photo);
  }

  public getBookmarks(): Array<IPhotoCard> {
    return this.bookmarks;
  }

  public removeFromBookmarks(photo: IPhotoCard): void {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== photo.id);
  }
}
