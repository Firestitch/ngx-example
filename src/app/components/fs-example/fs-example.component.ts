import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';

import { ExampleService } from '../../services/example.service';
import { FsExampleService } from '../../services/fs-example.service';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { FsExampleHighlightComponent } from '../fs-example-highlight/fs-example-highlight.component';
import { UpperCasePipe } from '@angular/common';


@Component({
    selector: 'fs-example',
    templateUrl: './fs-example.component.html',
    styleUrls: ['./fs-example.component.scss'],
    providers: [ExampleService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatToolbar,
        RouterLink,
        MatIconButton,
        MatTooltip,
        MatIcon,
        MatTabGroup,
        MatTab,
        FsExampleHighlightComponent,
        UpperCasePipe,
    ],
})

export class FsExampleComponent implements OnInit {
  private _exampleService = inject(FsExampleService);
  exampleService = inject(ExampleService);


  public showTabs: boolean = false;
  public tabs: any[] = [];
  public code = '';
  public anchor = '';
  public show = true;
  public configureComponent;
  public configureData = {};

  @Input() public name: string;
  @Input() public componentPath: string;
  @Input() public componentName: string;
  @Input() public componentNames: string;

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
