import { Injectable } from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {debounceTime} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MaskService {
  public showMask$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public displayMask(): void {
      fromEvent(document, 'mousemove')
        .pipe(debounceTime(3600000))    //1 minute in milliseconds
        .subscribe(e => {
          this.showMask$.next(true);
        });
  }
}
