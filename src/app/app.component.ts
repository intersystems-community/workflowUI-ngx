import {AppService} from './app.service';
import {AuthService} from '@core/modules/auth/auth.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {BehaviorSubject} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
    currentUser$$: BehaviorSubject<string | null> = this._authService.currentUser$$;
    isLoggedIn: boolean = true;
    title: string = 'Workflow UI';

    constructor(
        private _appService: AppService,
        private _authService: AuthService,
        private primengConfig: PrimeNGConfig,
        private _router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;

        this._authService.isLoggedIn$$
            .subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;

                if (!isLoggedIn) {
                    this._router.navigate(['/login']);
                }
            });

        const currentUser: string | null = localStorage.getItem('wf-current-user');
        this._authService.currentUser$$.next(currentUser);
        this._authService.isLoggedIn$$.next(!!currentUser);

        if (currentUser) {
            this._authService.getUserInfo()
                .subscribe();
        }
    }
}
