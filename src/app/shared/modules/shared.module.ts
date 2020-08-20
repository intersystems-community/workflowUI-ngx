import {NgModule} from '@angular/core';

import {BaseComponent} from '../components/base/base.component';
import {FooterComponent} from '../components/footer/footer.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';

import {RouterModule} from '@angular/router';
import {VendorModule} from '@shared/modules/vendor.module';

@NgModule({
    declarations: [
        BaseComponent,
        FooterComponent,
        NavbarComponent,
        ModalBaseComponent
    ],
    imports: [
        RouterModule,
        VendorModule
    ],
    exports: [
        BaseComponent,
        FooterComponent,
        NavbarComponent,
        ModalBaseComponent
    ]
})
export class SharedModule { }
