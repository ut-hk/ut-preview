import { NgModule } from '@angular/core';
import { InternalImagePipe } from './internal-image/internal-image';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    InternalImagePipe,
  ],
  imports: [],
  exports: [
    InternalImagePipe,
  ],
  providers: [
    DatePipe
  ]
})
export class PipesModule {
}
