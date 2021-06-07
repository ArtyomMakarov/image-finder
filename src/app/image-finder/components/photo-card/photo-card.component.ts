import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookmarkService} from '../../services/bookmark.service';
import {IPhotoCard} from '../../models/photo-card.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() photos!: Array<IPhotoCard>;
  @Input() bookmarks!: Array<IPhotoCard>;
  @Output() bookmarksChange = new EventEmitter<Array<IPhotoCard>>();

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
  }

  public bookmarkPhoto(photo: IPhotoCard): void {
    this.bookmarkService.addToBookmarks(photo);
  }

  public removeFromBookmarks(photo: IPhotoCard): void {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== photo.id);
    this.bookmarkService.removeFromBookmarks(photo);
    this.bookmarksChange.emit(this.bookmarks);
  }

}
