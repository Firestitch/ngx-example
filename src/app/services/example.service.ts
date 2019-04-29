import { Injectable, Component } from "@angular/core";
import { FsExampleComponent } from "../components/fs-example/fs-example.component";

@Injectable()
export class ExampleService {

  public exampleComponent: FsExampleComponent;

  public reload() {
    this.exampleComponent.show = false;

    setTimeout(() => {
      this.exampleComponent.show = true;
    });
  }
}
