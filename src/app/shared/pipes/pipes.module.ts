import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPipe } from './img.pipe';
import { HotelFilterPipe } from './hotel-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImgPipe,
    HotelFilterPipe
  ],
  declarations: [
    ImgPipe,
    HotelFilterPipe
  ]
})
export class PipesModule { }
