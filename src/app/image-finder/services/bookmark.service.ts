import { Injectable } from '@angular/core';
import {IPhotoCard} from '../models/photo-card.model';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Injectable()
export class BookmarkService {
  private bookmarks: Array<IPhotoCard> = [];

  constructor(private localStorageService: LocalStorageService) { }

  public addToBookmarks(photo: IPhotoCard): void {
    this.bookmarks.push(photo);
    this.localStorageService.set('bookmarks', this.bookmarks);
  }

  public removeFromBookmarks(photo: IPhotoCard): void {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== photo.id);
    this.localStorageService.set('bookmarks', this.bookmarks);
  }
}
