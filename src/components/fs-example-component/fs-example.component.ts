import { Component, Input, OnInit } from '@angular/core';
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
  styleUrls: ['fs-example.component.css']
})

export class FsExampleComponent implements OnInit {
  public componentTitle: string;
  public showTabs: boolean = false;
  public tabs: ComponentCode[];

  @Input() title: string;
  @Input() componentName: string;

  constructor(
    private http: HttpClient,
    private exampleService: FsExampleService 
  ) {}

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