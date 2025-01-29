import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FsMessage } from '@firestitch/message';

import { CopierService } from '../../services/copier';


@Component({
  selector: 'fs-example-highlight',
  templateUrl: './fs-example-highlight.component.html',
  styleUrls: ['./fs-example-highlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsExampleHighlightComponent {
  
  @Input() public language: string;

  @Input() public source: string;

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
