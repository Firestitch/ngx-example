import {
  AfterContentChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'fs-examples',
  templateUrl: 'fs-examples.component.html',
  styleUrls: [ 'fs-examples.component.scss' ]
})
export class FsExamplesComponent implements OnInit, AfterContentChecked {
  @Input() public title: string;
  @Input() public npmUrl: string;
  @Input() public githubUrl: string;
  @Input('name') public submoduleName: string;

  @Input('config') set config(config) {
    this.title = config.title;
    this.npmUrl = config.npmUrl;
    this.githubUrl = config.githubUrl;
  }

  public examples: any = [];
  public loaded = false;
  private _submoduleUrl;

  constructor(
    public el: ElementRef,
    private sanitizer: DomSanitizer,
  ) {}

  get submoduleUrl() {
    return this._submoduleUrl;
  }

  public ngOnInit() {
    const url = `${window.location.origin}/docs`;
    this._submoduleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.loaded = true;
  }

  public ngAfterContentChecked() {
    this.getExampleElements()
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
      this.el.nativeElement.querySelectorAll('fs-example')
    ).reduce((acc: any[], rowElement: any, index) => {
      const title: string = rowElement.getAttribute('title');
      if (title) {
        acc.push({el: rowElement, title: title});
      }

      return acc;
    }, []);
  }
}
