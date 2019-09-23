import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {

    private headerSubject = new Subject<boolean>();
    headerObservable  = this.headerSubject.asObservable();

    private footerSubject = new Subject<boolean>();
    footerObservable  = this.footerSubject.asObservable();

    constructor() { }

    hideDefaultHeader(hide) {
        this.headerSubject.next(hide);
    }

    hideDefaultFooter(hide) {
        this.headerSubject.next(hide);
    }
}