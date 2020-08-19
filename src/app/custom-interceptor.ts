import {AuthService} from '@core/modules/auth/auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            withCredentials: true
        });

        this._authService.resetTimeout();

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => { }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                        case 503:
                            this._authService.logout(false);
                    }
                }
            })
        );
    }
}
