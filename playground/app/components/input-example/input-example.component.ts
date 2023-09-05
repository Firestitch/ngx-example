import { Component } from '@angular/core';
import { FsExampleComponent } from 'src/app/components/fs-example/fs-example.component';

@Component({
  selector: 'input-example',
  templateUrl: 'input-example.component.html',
  styleUrls: ['input-example.component.scss']
})
export class InputExampleComponent {

  public config = {
    text: 'Sushi',
    height: 100,
    width: 200
  };

  constructor(private example: FsExampleComponent) {
  }
}
