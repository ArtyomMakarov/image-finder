import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '../../services/bookmark.service';
import {IPhotoCard} from '../../models/photo-card.model';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.scss']
})
export class BookmarksPageComponent implements OnInit {

  public bookmarks: Array<IPhotoCard> = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
    console.log(this.bookmarks);
  }

}
