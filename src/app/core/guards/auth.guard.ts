import {AuthService} from '../modules/auth/auth.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppConfig } from 'app/app.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._authService.getUserInfo()
            .pipe(
                map(e => {
                    if (e) {
                        return of(true);
                    }
                }),
                catchError((err) => {
                    this._router.navigate([AppConfig.MAIN_APP_LOGIN_URL]);
                    return of(false);
                })
            ) as Observable<boolean>;
    }
}

