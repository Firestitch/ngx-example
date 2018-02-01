import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsExampleService } from '../../services/fs-example.service';
import { HighlightJsService } from 'angular2-highlight-js';
export declare class FsExampleComponent implements OnInit {
    private http;
    private exampleService;
    private highlightService;
    componentTitle: string;
    showTabs: boolean;
    tabs: any;
    title: string;
    componentName: string;
    constructor(http: HttpClient, exampleService: FsExampleService, highlightService: HighlightJsService);
    ngOnInit(): void;
    toggleContent(): void;
}
