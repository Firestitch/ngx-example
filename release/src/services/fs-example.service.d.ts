import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export declare class FsExampleService {
    private http;
    constructor(http: HttpClient);
    getElementCode(name: any): Observable<object>;
    getFileContents(name: any, paths: any): Observable<Array<object>>;
}
