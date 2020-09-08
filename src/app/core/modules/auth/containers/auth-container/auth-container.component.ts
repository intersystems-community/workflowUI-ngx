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
        if (this.loginForm.valid) {
            const form = this.loginForm.value;
            this._authService.login(form.username.trim(), form.password)
                .subscribe(({username, timeout}: UserInfo) => {
                    this._authService.isLoggedIn$$.next(true);
                    localStorage.setItem('wf-current-user', username);
                    this._router.navigate(['worklist']);
                });
        } else {
            this.isLoginError = false;
            setTimeout(() => {
                // this.messages = [{severity: 'error', detail: 'AUTH.REQUIRED_FIELDS'}];
                this.isLoginError = true;
            }, 10);
        }
    }
}
