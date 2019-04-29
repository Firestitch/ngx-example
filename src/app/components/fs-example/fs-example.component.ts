import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsExampleService } from '../../services/fs-example.service';
import { FsDrawerAction, FsDrawerService } from '@firestitch/drawer';
import { ExampleService } from '../../services/example.service';


@Component({
  selector: 'fs-example',
  templateUrl: 'fs-example.component.html',
  styleUrls: ['fs-example.component.scss'],
  providers: [ExampleService]
})

export class FsExampleComponent {

  public showTabs: Boolean = false;
  public tabs = [];
  public code = '';
  public show = true;
  public configureComponent;
  public configureData = {};
  public drawerRef;

  @Input() name: string;
  @Input() componentPath: string;
  @Input() componentName: string;
  @Input() componentNames: string;

  constructor(
    private http: HttpClient,
    private fsExampleService: FsExampleService,
    public drawer: FsDrawerService,
    public exampleService: ExampleService
  ) {}

  public toggleContent() {
    this.showTabs = !this.showTabs;
    this.tabs = [];

    if (this.showTabs) {
      this._loadComponents();
    }
  }

  public configureClick() {

    if (this.drawerRef) {
      this.drawerRef.close();
    }

    this.drawerRef = this.drawer.open(this.configureComponent, {
      data: this.configureData,
      disableClose: false,
      position: 'right',
      width: 'auto',
      resize: {
        min: 260,
        max: 99999
      },
      actions: [
        {
          icon: 'clear',
          type: FsDrawerAction.Button,
          close: true
        }
      ]
    });
  }

  public setConfigureComponent(component, data) {

    setTimeout(() => {
      if (!data) {
        data = {};
      }

      this.exampleService.exampleComponent = this;
      data.example = this.exampleService;

      this.configureComponent = component;
      this.configureData = data;
    });
  }

  private _loadComponents() {
    this.fsExampleService.getFileContents(this.componentPath, this.componentName)
      .subscribe((files: any) => {

        files.forEach((file) => {
          file.name = file.type;
        });

        this._filesToTabs(files);
      });

    if (this.componentNames) {

      this.componentNames.split(',').forEach((name) => {
        this.fsExampleService.getFileContents(this.componentPath, name)
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
