import {AppConfig, AppService} from '../../../../../app.service';
import {AuthService} from '@core/modules/auth/auth.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/api';
import {takeUntil} from 'rxjs/operators';
import {UserInfo} from '@core/models/user-info';

@Component({
    selector: 'app-auth-container',
    templateUrl: './auth-container.component.html',
    styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent extends BaseComponent implements OnInit {
    currentLanguage: FormControl = new FormControl('en');
    errorMsg: string = '';
    isLoginError: boolean = false;
    languages: SelectItem[] = AppConfig.LANGUAGES;

    loginForm: FormGroup = this._fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private _appService: AppService,
        private _authService: AuthService,
        private _fb: FormBuilder,
        private _router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this.currentLanguage.setValue(this._appService.language.value);

        this.currentLanguage.valueChanges
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((language: string) => {
                this._appService.language.next(language);
                localStorage.setItem('wf-current-language', language);
            });
    }

    login() {
        this.errorMsg = '';

        if (this.loginForm.valid) {
            const form = this.loginForm.value;
            this._authService.login(form.username.trim(), form.password)
                .subscribe((userInfo: UserInfo) => {
                    if (userInfo) {
                        const {username, timeout} = userInfo;
                        this._authService.isLoggedIn$$.next(true);
                        localStorage.setItem('wf-current-user', username);
                        this._router.navigate(['worklist']);
                    }
                },
                error => {
                    this.setLoginErrorShaker();

                    if (error && error.status === 401) {
                        this.errorMsg = 'LOGIN_FORM.401_LOGIN_ERROR';
                    }

                    if (error && error.status === 403) {
                        this.errorMsg = 'LOGIN_FORM.403_LOGIN_ERROR';
                    }
                });
        } else {
            this.setLoginErrorShaker();
        }
    }

    private setLoginErrorShaker() {
        this.isLoginError = false;
        setTimeout(() => this.isLoginError = true, 10);
    }
}
