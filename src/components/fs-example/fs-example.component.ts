import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { FsExampleService } from '../../services/fs-example.service';

interface ComponentCode {
  type: string;
  code: string
}

@Component({
  selector: 'fs-example',
  templateUrl: 'fs-example.component.html',
  styleUrls: ['fs-example.component.scss']
})

export class FsExampleComponent implements OnInit {
  public componentTitle: string;
  public showTabs: Boolean = false;
  public tabs;
  public code = '';

  @Input() title: string;
  @Input() componentName: string;
  @Input() componentNames: string;

  constructor(
    private http: HttpClient,
    private exampleService: FsExampleService,
  ) {}

  ngOnInit() {
    const order = ['html', 'ts', 'css', 'scss'];

    this.exampleService.getElementCode(this.componentName).subscribe((elem: any)  => {
      this.exampleService.getFileContents(this.componentName, elem.children)
        .subscribe((files: any) => {
          this.tabs = files.sort((a: any, b: any) => {
            return order.indexOf(a.type) - order.indexOf(b.type)
          });
          this.tabs.forEach((tab) => {
            tab.name = tab.type;
          });
        });
    });

    if (this.componentNames) {

      this.componentNames.split(',').forEach((name) => {

        this.exampleService.getElementCode(name).subscribe((elem: any)  => {
          this.exampleService.getFileContents(this.componentName, elem.children)
            .subscribe((files: any) => {

              const tabs = files.sort((a: any, b: any) => {
                return order.indexOf(a.type) - order.indexOf(b.type)
              });

              tabs.forEach((tab) => {
                this.tabs.push(tab);
              });
            });
        });
      });
    }
  }
  toggleContent() {
    this.showTabs = !this.showTabs;
  }
}
