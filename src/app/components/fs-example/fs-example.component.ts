import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FsExampleService } from '../../services/fs-example.service';
import { ExampleService } from '../../services/example.service';


@Component({
  selector: 'fs-example',
  templateUrl: './fs-example.component.html',
  styleUrls: ['./fs-example.component.scss'],
  providers: [ExampleService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FsExampleComponent {

  public showTabs: Boolean = false;
  public tabs = [];
  public code = '';
  public show = true;
  public configureComponent;
  public configureData = {};

  @Input() name: string;
  @Input() componentPath: string;
  @Input() componentName: string;
  @Input() componentNames: string;

  constructor(
    private fsExampleService: FsExampleService,
    public exampleService: ExampleService
  ) {}

  public toggleContent() {
    this.showTabs = !this.showTabs;
    this.tabs = [];

    if (this.showTabs) {
      this._loadComponents();
    }
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
