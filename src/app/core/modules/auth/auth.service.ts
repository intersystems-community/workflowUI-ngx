import {AppConfig} from '../../../app.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {UserInfo} from '@core/models/user-info';

/**
 * Main Authentication Service for control user session
 */
@Injectable({providedIn: 'root'})
export class AuthService {
    private alive = true;

    /**
     * Timer to finish session for current user
     */
    private sessionTimeout: number = 900;
    private sessionTimeoutInstance: any;

    currentUser$$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    isLoggedIn$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     * BehaviorSubject for check that user logged out by timeout
     */
    isLoggedOutByTimeout$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     * @ignore
     */
    constructor(
        private _http: HttpClient,
        private _router: Router
    ) {}

    getUserInfo(headers?: HttpHeaders): Observable<UserInfo> {
        const obs = this._http.get(`${AppConfig.REST_API_URL}/user-info`, {headers}) as Observable<UserInfo>;
        return obs.pipe(
            tap((userInfo: UserInfo) => {
                if (userInfo) {
                    const {username, timeout} = userInfo;
                    this.currentUser$$.next(username);
                    this.sessionTimeout = timeout;
                } else {
                    this.logout(false);
                }
            })
        ) as Observable<UserInfo>;
    }

    /**
     * Logout
     */
    logout(onServer: boolean = true): void {
        this.alive = false;
        // set it back to true, because we need the active subscription on next call of resetTimeout()
        setTimeout(() => this.alive = true);
        this.currentUser$$.next('');
        this.isLoggedIn$$.next(false);
        localStorage.removeItem('wf-current-user');
        this._router.navigate([AppConfig.MAIN_APP_LOGIN_URL]);

        if (onServer) {
            this._http.get(`${AppConfig.REST_API_URL}/logout`).subscribe(() => {});
        }
    }

    /**
     * Reset timeout. On subscribe call Logout, hide all Modals and clear Store
     */
    resetTimeout() {
        if (this.isLoggedIn$$.value) {
            this.isLoggedOutByTimeout$$.next(false);
            clearTimeout(this.sessionTimeoutInstance);
            this.sessionTimeoutInstance = setTimeout(() => {
                this.logout();
                this.isLoggedOutByTimeout$$.next(true);
            }, this.sessionTimeout * 1000 - 5000);
        } else {
            clearTimeout(this.sessionTimeoutInstance);
        }
    }
}
