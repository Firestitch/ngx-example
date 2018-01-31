import { Component, Input, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

interface ComponentCode {
  type: string;
  code: string
}
declare var hljs: any;

@Component({
  selector: 'fs-example',
  templateUrl: 'fs-example.component.html',
  styles: [`mat-toolbar {color: rgba(0,0,0,0.54); font-size: 16px; display: flex; justify-content: space-between}
   .example-code {border-bottom: 1px solid rgba(0,0,0,0.1); padding: 16px 24px; min-height: 64px}`]
})

export class FsExampleComponent implements OnInit {
  public componentTitle: string;
  public showTabs: boolean = false;
  public tabs: ComponentCode[];

  @Input() title: string;
  @Input() componentName: string;

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private http: HttpClient,
    @Inject('elementService') private elementService 
  ) {
    iconRegistry.addSvgIcon('code',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/code.svg'));
  }
  ngOnInit() {
    let order = ['html', 'ts', 'css'];

    this.elementService.getElementCode(this.componentName).subscribe(elem => {
      this.elementService.getFileContents(this.componentName, elem.children)
        .subscribe(files => {
          this.tabs = files.sort((a, b) => {
            return order.indexOf(a.type) - order.indexOf(b.type)
          });
        });
    });
  }
  toggleContent() {
    this.showTabs = !this.showTabs;
  }
}