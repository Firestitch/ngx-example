import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';

import { CopierService } from '../../services/copier';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Highlight } from 'ngx-highlightjs';


@Component({
    selector: 'fs-example-highlight',
    templateUrl: './fs-example-highlight.component.html',
    styleUrls: ['./fs-example-highlight.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatIconButton,
        MatIcon,
        Highlight,
    ],
})
export class FsExampleHighlightComponent {
  private _copier = inject(CopierService);
  private _message = inject(FsMessage);

  
  @Input() public language: string;

  @Input() public source: string;

  public copySource() {
    if (this._copier.copyText(this.source)) {
      this._message.success('Code copied');
    } else {
      this._message.error('Copy failed. Please try again!');
    }
  }
}
