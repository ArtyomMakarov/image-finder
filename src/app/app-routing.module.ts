import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchPageComponent} from './image-finder/pages/search-page/search-page.component';
import {BookmarksPageComponent} from './image-finder/pages/bookmarks-page/bookmarks-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarksPageComponent},
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
