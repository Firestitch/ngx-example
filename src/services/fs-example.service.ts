import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { of } from 'rxjs/observable/of';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class FsExampleService {

  public static readonly EXAMPLE_PATH_PREFIX = 'assets/components';

  constructor(private http: HttpClient) { }

  getFileContents(name): Observable<{}[]> {
    const fileCodeRequests = this._paths(name).reduce((acc, file: any) => {
      const request = this.http.get(file.path, { responseType: 'text' }).pipe(
        map(code => ({ type: file.type, name: file.name, code })),
        catchError((error) => of(null)),
      );

      acc.push(request);

      return acc;
    }, []);

    return forkJoin(...fileCodeRequests).pipe(
      map((files) => files.filter((file) => !!file)),
    );
  }

  private _paths(name) {
    return [
      {
        type: 'ts',
        name: `${name}.component.ts`,
        path: `${FsExampleService.EXAMPLE_PATH_PREFIX}/${name}/${name}.component.ts`,
      },
      {
        type: 'html',
        name: `${name}.component.html`,
        path: `${FsExampleService.EXAMPLE_PATH_PREFIX}/${name}/${name}.component.html`,
      },
      {
        type: 'scss',
        name: `${name}.component.scss`,
        path: `${FsExampleService.EXAMPLE_PATH_PREFIX}/${name}/${name}.component.scss`,
      },
    ]
  }
}
