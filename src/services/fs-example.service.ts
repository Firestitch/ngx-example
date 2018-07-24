import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { catchError, map, tap, reduce } from 'rxjs/operators';

@Injectable()
export class FsExampleService {

  constructor(private http: HttpClient) { }

  getElementCode(name): Observable<object> {
    const tapData = (res) => {
      return res.children.filter(child => child.name === name)[0];
    }
    return this.http.get('assets/components/components.json')
      .pipe(map(tapData));
  }
  getFileContents(name, paths): Observable<Array<object>> {
    const fileCode = paths.reduce((a, child) => {
      if (RegExp(name).test(child.name)) {
        const type = child.extension.replace(/\./, '');
        const call = this.http.get('assets/components/' + child.path, { responseType: 'text' }).pipe(
          map(code => ({type, code, name: child.name}))
        );
        return [...a, call];
      }
      return a
    }, []);

    return forkJoin(...fileCode);
  }
}
