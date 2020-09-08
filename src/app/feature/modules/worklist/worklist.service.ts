import {AppConfig} from '../../../app.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
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
       return this._http.get(`${AppConfig.REST_API_URL}/tasks`) as Observable<Task[]>;
    }

    getTask(id: string): Observable<Task> {
        return this._http.get(`${AppConfig.REST_API_URL}/task/${id}`) as Observable<Task>;
    }

    saveTask(task: Task): Observable<unknown> {
        return this._http.post(`${AppConfig.REST_API_URL}/task/${task.id}`, task) as Observable<unknown>;
    }
}
