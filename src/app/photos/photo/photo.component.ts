import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  // @Input(): torna os métodos da classe visiveis e passiveis de receber valor (Property binding)
  @Input() description = '';
  @Input() url = '';
}
