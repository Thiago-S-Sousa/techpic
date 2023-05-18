import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [],
  exports: [], //exports: deixa o modulo publico
  imports: [PhotoModule, PhotoFormModule, PhotoListModule], //CommomModule - è uma boa prática já importar a cada módulo novo
})
export class PhotosModule {}
