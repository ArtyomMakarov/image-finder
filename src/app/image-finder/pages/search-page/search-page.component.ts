import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FlickrService} from '../../services/flickr.service';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {debounceTime} from 'rxjs/operators';
import {IPhotoCard} from '../../models/photo-card.model';
import {CommonConstants} from '../../../constants/common.constants';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') private searchInputRef!: ElementRef;
  public searchKeyword!: string;
  public photos!: Array<IPhotoCard>;

  constructor(private fkickrService: FlickrService) { }

  ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchInputRef.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .subscribe(() => {
        const SEARCH_STRING: string = this.searchInputRef.nativeElement.value;
        if (SEARCH_STRING.length >= 3) {
          this.searchKeyword = SEARCH_STRING;
          this.fkickrService.search_keyword(SEARCH_STRING, CommonConstants.PAGE_SIZE, CommonConstants.PAGE_INDEX)
            .subscribe(res => {
              this.photos = res;
            });
        }
      });
  }

}
