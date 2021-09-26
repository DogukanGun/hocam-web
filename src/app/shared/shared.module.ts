import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    RouterModule,
  ]
})
export class SharedModule { }
