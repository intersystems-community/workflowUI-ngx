import {BehaviorSubject, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IAppConfig} from '@core/models/i-app-config';
import {Injectable} from '@angular/core';

// tslint:disable-next-line:variable-name
export let AppConfig: IAppConfig;

@Injectable({providedIn: 'root'})
export class AppService {
    language: BehaviorSubject<string> = new BehaviorSubject<string>('en');

    constructor(
        private _http: HttpClient
    ) {
        // default configuration in case we missed config file
        AppConfig = {
            LANGUAGES: [{label: '🇬🇧 English', value: 'en'}, {label: '🇷🇺 Русский', value: 'ru'}],
            REST_API_URL: '/workflow/rest',
            TASKS_LIMIT: 10000
        };
    }

    loadConfig() {
        const jsonFile = `assets/config/config.json`;
        return new Promise((resolve, reject) => {
            this._http.get(jsonFile)
                .toPromise()
                .catch((err) => {
                    console.log('ERROR getting config data', err);
                    resolve(true);
                    return throwError(err || 'Error while getting config data');
                })
                .then( (configData) => {
                    AppConfig = configData as IAppConfig;
                    resolve(true);
                });
        });
    }
}
