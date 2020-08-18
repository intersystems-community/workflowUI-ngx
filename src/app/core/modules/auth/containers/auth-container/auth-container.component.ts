import {AuthService} from '@core/modules/auth/auth.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserInfo} from '@core/models/user-info';

@Component({
    selector: 'app-auth-container',
    templateUrl: './auth-container.component.html',
    styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent {
    isLoginError: boolean = false;

    loginForm: FormGroup = this._fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private _authService: AuthService,
        private _fb: FormBuilder,
        private _router: Router
    ) {
    }

    login() {
        if (this.loginForm.valid) {
            const form = this.loginForm.value;
            this._authService.login(form.username, form.password)
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
