import { Component } from '@angular/core';
import { FsExampleComponent } from 'src/app/components/fs-example/fs-example.component';
import { ConfigureComponent } from '../configure';

@Component({
  selector: 'input-example',
  templateUrl: 'input-example.component.html',
  styleUrls: ['input-example.component.scss']
})
export class InputExampleComponent {

  constructor(private example: FsExampleComponent) {
   example.setConfigureComponent(ConfigureComponent, { config: { height: 100, width: 200 } });
  }
}
