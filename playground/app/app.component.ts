import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExamplesComponent } from '../../src/app/components/fs-examples/fs-examples.component';
import { FsExampleComponent } from '../../src/app/components/fs-example/fs-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExamplesComponent, FsExampleComponent, InputExampleComponent]
})
export class AppComponent {
  public config = environment;
}