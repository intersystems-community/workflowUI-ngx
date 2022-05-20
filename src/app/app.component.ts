import {AppConfig, AppService} from './app.service';
import {AuthService} from '@core/modules/auth/auth.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {BehaviorSubject} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
        private _i18n: TranslateService,
        private _primengConfig: PrimeNGConfig,
        private _router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this._primengConfig.ripple = true;
        const languagesAvailable: string[] = AppConfig.LANGUAGES.map(lang => lang.value);
        this._i18n.addLangs(languagesAvailable);
        this._i18n.setDefaultLang('en');

        this._appService.language
            .subscribe(lang => {
                this._i18n.use(lang);
            });

        const browserLanguage: string = this._i18n.getBrowserLang();
        const fallbackLanguage = languagesAvailable.includes(browserLanguage) ? browserLanguage : 'en';
        const language: string = localStorage.getItem('wf-current-language') || fallbackLanguage;
        this._appService.language.next(language);

        this._authService.isLoggedIn$$
            .subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;

                if (!isLoggedIn) {
                    this._router.navigate([AppConfig.MAIN_APP_LOGIN_URL]);
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
