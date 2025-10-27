import { Component, inject } from '@angular/core';
import { FsExampleComponent } from 'src/app/components/fs-example/fs-example.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-example',
    templateUrl: 'input-example.component.html',
    styleUrls: ['input-example.component.scss'],
    standalone: true,
    imports: [MatFormField, MatInput, FormsModule]
})
export class InputExampleComponent {
  private example = inject(FsExampleComponent);


  public config = {
    text: 'Sushi',
    height: 100,
    width: 200
  };
}
