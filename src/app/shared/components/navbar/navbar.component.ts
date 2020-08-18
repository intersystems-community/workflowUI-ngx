import {AuthService} from '@core/modules/auth/auth.service';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Input() user: string = '';

    isNavMenuActive = false;

    constructor(
        private _auth: AuthService
    ) {}

    toggleMenu() {
        this.isNavMenuActive = !this.isNavMenuActive;
    }

    logout() {
        this._auth.logout();
    }
}
