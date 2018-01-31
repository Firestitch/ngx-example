export const ELEMENTS = {
  input: {
    title: 'Input',
    codeCollection: [
      {
        label: 'HTML', 
        code: `<h1>Component template</h1>
fs-component.component.html`
      },
      {
        label: 'TS', 
        code: `import { Component } from '@angular/core';

@Component({
  selector: 'fs-component',
  templateUrl: 'fs-component.component.html',
  styleUrls: [ '../../styles.scss' ],
})
export class FsComponentComponent {

  constructor() {
  }
}` 
      },
      {
        label: 'CSS', 
        code: ``
      }
    ]
  }
}