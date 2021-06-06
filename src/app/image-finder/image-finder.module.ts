import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlickrService} from './services/flickr.service';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import {SharedModule} from '../shared/shared.module';




@NgModule({
  declarations: [
    SearchPageComponent,
    BookmarksPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [FlickrService]
})
export class ImageFinderModule { }
