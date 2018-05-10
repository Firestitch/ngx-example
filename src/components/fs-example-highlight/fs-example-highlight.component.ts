import { Component, Input } from '@angular/core';

@Component({
  selector: 'fs-example-highlight',
  templateUrl: 'fs-example-highlight.component.html',
  styleUrls: ['fs-example-highlight.component.scss']
})

export class FsExampleHighlightComponent {
  @Input() language: string;
  @Input() source: string;
}
