import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {FlickrService} from './services/flickr.service';
import {BookmarkService} from './services/bookmark.service';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    BookmarksPageComponent,
    PhotoCardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [FlickrService, BookmarkService]
})
export class ImageFinderModule { }
