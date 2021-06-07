import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FlickrService} from '../../services/flickr.service';
import {CommonConstants} from '../../../constants/common.constants';
import {PageEvent} from '@angular/material/paginator';
import {IPhotoCard} from '../../models/photo-card.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() private searchKeyword!: string;
  @Output() public photos = new EventEmitter<Array<IPhotoCard>>();

  public pages!: number;
  public pageSize = CommonConstants.PAGE_SIZE;
  public pageSizeOptions = CommonConstants.PAGE_SIZE_OPTIONS;
  public pageEvent!: PageEvent;

  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
    this.pages = this.flickrService.pages;
  }

  public loadData(e: PageEvent): any {
    this.flickrService.search_keyword(this.searchKeyword, e.pageSize, e.pageIndex)
      .subscribe(res => {
        this.photos.emit(res);
      });
  }

}
