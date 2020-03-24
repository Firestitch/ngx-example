import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CopierService } from '../../services/copier';


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
    private _toastr: ToastrService,
  ) {}

  public copySource() {
    if (this._copier.copyText(this.source)) {
      this._toastr.success('Code copied');
    } else {
      this._toastr.error('Copy failed. Please try again!');
    }
  }
}
