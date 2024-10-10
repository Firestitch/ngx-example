import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ExampleService } from '../../services/example.service';
import { FsExampleService } from '../../services/fs-example.service';


@Component({
  selector: 'fs-example',
  templateUrl: './fs-example.component.html',
  styleUrls: ['./fs-example.component.scss'],
  providers: [ExampleService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FsExampleComponent implements OnInit {

  public showTabs: boolean = false;
  public tabs = [];
  public code = '';
  public anchor = '';
  public show = true;
  public configureComponent;
  public configureData = {};

  @Input() public name: string;
  @Input() public componentPath: string;
  @Input() public componentName: string;
  @Input() public componentNames: string;

  constructor(
    private _exampleService: FsExampleService,
    public exampleService: ExampleService,
  ) {}

  public ngOnInit() {
    this.anchor = this.name.toLowerCase().replace(/ /g, '-');
  }

  public toggleContent() {
    this.showTabs = !this.showTabs;
    this.tabs = [];

    if (this.showTabs) {
      this._loadComponents();
    }
  }
  
  private _loadComponents() {
    this._exampleService.getFileContents(this.componentPath, this.componentName)
      .subscribe((files: any) => {

        files.forEach((file) => {
          file.name = file.type;
        });

        this._filesToTabs(files);
      });

    if (this.componentNames) {

      this.componentNames.split(',').forEach((name) => {
        this._exampleService.getFileContents(this.componentPath, name)
          .subscribe((files: any) => {
            this._filesToTabs(files);
          });
      });
    }
  }

  private _filesToTabs(files) {
    const order = ['html', 'ts', 'css', 'scss'];

    const tabs = files.sort((a: any, b: any) => {
      return order.indexOf(a.type) - order.indexOf(b.type);
    });

    tabs.forEach((tab) => {
      this.tabs.push(tab);
    });
  }
}
