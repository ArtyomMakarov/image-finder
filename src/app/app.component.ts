import { Component, OnInit } from '@angular/core';
import {MaskService} from './core/services/mask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'image-finder';
  public showMask = false;

  constructor(private maskService: MaskService) {
  }

  ngOnInit() {
    this.maskService.showMask$.subscribe(res => {
      this.showMask = res;
    });
  }
}
