import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent],
  exports: [], //exports: deixa o modulo publico
  imports: [HttpClientModule, CommonModule], //CommomModule - è uma boa prática já importar a cada módulo novo
})
export class PhotosModule {}
