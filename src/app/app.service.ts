import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
    language: BehaviorSubject<string> = new BehaviorSubject<string>('en');

    constructor() {}
}
