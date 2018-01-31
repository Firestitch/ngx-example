import { Component, Input, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { FsExampleService } from '../../services/fs-example.service'

interface ComponentCode {
  type: string;
  code: string
}

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
    private exampleService: FsExampleService 
  ) {
    iconRegistry.addSvgIcon('code',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/code.svg'));
  }
  ngOnInit() {
    let order = ['html', 'ts', 'css'];

    this.exampleService.getElementCode(this.componentName).subscribe((elem: any)  => {
      this.exampleService.getFileContents(this.componentName, elem.children)
        .subscribe((files: any) => {
          this.tabs = files.sort((a: any, b: any) => {
            return order.indexOf(a.type) - order.indexOf(b.type)
          });
        });
    });
  }
  toggleContent() {
    this.showTabs = !this.showTabs;
  }
}