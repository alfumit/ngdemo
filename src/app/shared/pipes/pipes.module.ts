import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPipe } from './img.pipe';
import { HotelFilterPipe } from './hotel-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImgPipe, HotelFilterPipe]
})
export class PipesModule { }
