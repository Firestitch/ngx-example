import { Component, Input } from '@angular/core';
import { CopierService } from '../../services/copier';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'fs-example-highlight',
  templateUrl: 'fs-example-highlight.component.html',
  styleUrls: ['fs-example-highlight.component.scss']
})
export class FsExampleHighlightComponent {
  @Input()
  set language(value: string) {
    this.languages = [value];
  }

  @Input() source: string;

  public languages = [];

  constructor(
    private _copier: CopierService,
    private _message: FsMessage,
  ) {}

  public copySource() {
    if (this._copier.copyText(this.source)) {
      this._message.success('Code copied');
    } else {
      this._message.error('Copy failed. Please try again!');
    }
  }
}
