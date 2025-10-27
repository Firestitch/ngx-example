import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FsIFrameModule } from '@firestitch/iframe';


@Component({
    selector: 'fs-examples',
    templateUrl: './fs-examples.component.html',
    styleUrls: ['./fs-examples.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsIFrameModule],
})
export class FsExamplesComponent implements OnInit, AfterContentChecked {
  
  @Input() public title: string;
  @Input() public npmUrl: string;
  @Input() public githubUrl: string;
  @Input('name') public submoduleName: string;

  @Input('config') public set config(config) {
    this.title = config.title;
    this.npmUrl = config.npmUrl;

    const match = config.npmUrl.match(/https:\/\/www.npmjs.com\/package\/(.*)/);

    if (match) {
      this.npmBadge = `https://badge.fury.io/js/${  encodeURIComponent(match[1])  }.svg`;
    }

    this.githubUrl = config.githubUrl;
  }

  public examples: any = [];
  public loaded = false;
  public npmBadge;
  private _submoduleUrl;

  constructor(
    public el: ElementRef,
    private _sanitizer: DomSanitizer,
  ) {}

  public get submoduleUrl() {
    return this._submoduleUrl;
  }

  public ngOnInit() {
    const url = `${window.location.origin}/docs`;
    this._submoduleUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    this.loaded = true;
  }

  public ngAfterContentChecked() {
    this.getExampleElements();
  }

  public scrollTo(example) {
    if (example && example.el) {
      window.document.documentElement.scrollTo(0, example.el.offsetTop);
    }
  }

  private getExampleElements() {
    if (this.examples.length) {
      return;
    }

    this.examples = Array.from(
      this.el.nativeElement.querySelectorAll('fs-example'),
    ).reduce((acc: any[], rowElement: any, index) => {
      const title: string = rowElement.getAttribute('title');
      if (title) {
        acc.push({ el: rowElement, title: title });
      }

      return acc;
    }, []);
  }
}
