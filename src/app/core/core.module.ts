import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverClassDirective } from './directives/hover-class.directive';

@NgModule({
  declarations: [
    HoverClassDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverClassDirective
  ]
})
export class CoreModule { }
