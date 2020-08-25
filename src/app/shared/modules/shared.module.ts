import {NgModule} from '@angular/core';

import {BaseComponent} from '../components/base/base.component';
import {ClickOutsideDirective} from '@shared/directives/click-outside.directive';
import {FooterComponent} from '../components/footer/footer.component';
import {GetPipe} from '@shared/pipes/get.pipe';
import {HandleLinkDirective} from '@shared/directives/handle-link.directive';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';
import {NavbarComponent} from '../components/navbar/navbar.component';

import {RouterModule} from '@angular/router';
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
        HandleLinkDirective
    ],
    imports: [
        RouterModule,
        VendorModule
    ],
    exports: [
        BaseComponent,
        FooterComponent,
        GetPipe,
        NavbarComponent,
        ModalBaseComponent,
        // directives
        ClickOutsideDirective,
        HandleLinkDirective
    ]
})
export class SharedModule { }
