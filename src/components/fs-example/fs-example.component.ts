import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsExampleService } from '../../services/fs-example.service';


@Component({
  selector: 'fs-example',
  templateUrl: 'fs-example.component.html',
  styleUrls: ['fs-example.component.scss']
})

export class FsExampleComponent {
  public showTabs: Boolean = false;
  public tabs = [];
  public code = '';

  @Input() title: string;
  @Input() componentName: string;
  @Input() componentNames: string;

  constructor(
    private http: HttpClient,
    private exampleService: FsExampleService,
  ) {}

  toggleContent() {
    this.showTabs = !this.showTabs;
    this.tabs = [];
    
    if (this.showTabs) {
      this._loadComponents();
    }
  }

  private _loadComponents() {
    this.exampleService.getFileContents(this.componentName)
      .subscribe((files: any) => {

        files.forEach((file) => {
          file.name = file.type;
        });

        this._filesToTabs(files);
      });

    if (this.componentNames) {

      this.componentNames.split(',').forEach((name) => {
        this.exampleService.getFileContents(name)
          .subscribe((files: any) => {
            this._filesToTabs(files);
          });
      });
    }
  }

  private _filesToTabs(files) {
    const order = ['html', 'ts', 'css', 'scss'];

    const tabs = files.sort((a: any, b: any) => {
      return order.indexOf(a.type) - order.indexOf(b.type)
    });

    tabs.forEach((tab) => {
      this.tabs.push(tab);
    });
  }
}
