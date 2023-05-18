import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription,
    LoadButtonComponent,
  ],
  exports: [], //exports: deixa o modulo publico
  imports: [HttpClientModule, CommonModule], //CommomModule - è uma boa prática já importar a cada módulo novo
})
export class PhotosModule {}
