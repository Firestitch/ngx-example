import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export declare class ElementsService {
    private http;
    private elements;
    constructor(http: HttpClient, elements: any);
    getElementCode(name: any): Observable<object>;
    getFileContents(name: any, paths: any): Observable<Array<object>>;
}
