import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {REST_API_URL} from '../../../../assets/config/config.json';
import {Task} from '../../../core/models/taks';

@Injectable({providedIn: 'root'})
export class WorklistService {
    /**
     * @ignore
     */
    constructor(
        private _http: HttpClient
    ) {
    }

    getTasks(): Observable<Task[]> {
       return this._http.get(`${REST_API_URL}/tasks`) as Observable<Task[]>;
    }

    getTask(id: string): Observable<Task> {
        return this._http.get(`${REST_API_URL}/task/${id}`) as Observable<Task>;
    }

    saveTask(task: Task): Observable<unknown> {
        return this._http.post(`${REST_API_URL}/task/${task.id}`, task) as Observable<unknown>;
    }
}
