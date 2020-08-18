import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {REST_API_URL} from '../../../../assets/config/config.json';

@Injectable({providedIn: 'root'})
export class WorklistService {
    /**
     * @ignore
     */
    constructor(
        private _http: HttpClient
    ) {
    }

    getTasks(): Observable<any[]> {
       return this._http.get(`${REST_API_URL}/tasks`, ) as Observable<any[]>;
    }
}
