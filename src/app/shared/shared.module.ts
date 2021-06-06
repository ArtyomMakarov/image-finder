import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ConfigService} from './services/config.service';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [ConfigService],
  exports: [
    MatIconModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
