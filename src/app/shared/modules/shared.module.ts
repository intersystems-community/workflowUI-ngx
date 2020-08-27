import {NgModule} from '@angular/core';

import {BaseComponent} from '../components/base/base.component';
import {ClickOutsideDirective} from '@shared/directives/click-outside.directive';
import {DebounceClickDirective} from '@shared/directives/debounce-click.directive';
import {FooterComponent} from '../components/footer/footer.component';
import {GetPipe} from '@shared/pipes/get.pipe';
import {HandleLinkDirective} from '@shared/directives/handle-link.directive';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {ThrottleClickDirective} from '@shared/directives/throttle-click.directive';

import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {VendorModule} from '@shared/modules/vendor.module';

@NgModule({
    declarations: [
        BaseComponent,
        FooterComponent,
        GetPipe,
        NavbarComponent,
        ModalBaseComponent,
        // directives
        ClickOutsideDirective,
        DebounceClickDirective,
        HandleLinkDirective,
        ThrottleClickDirective
    ],
    imports: [
        RouterModule,
        VendorModule,
        TranslateModule
    ],
    exports: [
        BaseComponent,
        FooterComponent,
        GetPipe,
        NavbarComponent,
        ModalBaseComponent,
        // directives
        ClickOutsideDirective,
        DebounceClickDirective,
        HandleLinkDirective,
        ThrottleClickDirective
    ]
})
export class SharedModule { }
