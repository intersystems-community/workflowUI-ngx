import {AuthService} from '../modules/auth/auth.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthContainerComponent} from '@core/modules/auth/containers/auth-container/auth-container.component';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanDeactivate<AuthContainerComponent> {
    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLoggedIn = this._authService.isLoggedIn$$.value;
        const {url} = state;

        if (isLoggedIn && url !== '/login') {
            // logged in so return true
            return true;
        } else if (isLoggedIn && url === '/login') {
            this._router.navigate(['/worklist']);
            return false;
        }

        if (!isLoggedIn && url === '/login') {
            return true;
        }

        this._router.navigate(['/login']);
        return false;
    }

    canDeactivate(component: AuthContainerComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): boolean {
        return this._authService.isLoggedIn$$.value;
    }
}
