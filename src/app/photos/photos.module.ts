import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent], //exports: deixa o modulo publico
  imports: [HttpClientModule],
})
export class PhotosModule {}
