import {NgModule} from '@angular/core';

import {BaseComponent} from '../components/base/base.component';
import {FooterComponent} from '../components/footer/footer.component';
import {NavbarComponent} from '../components/navbar/navbar.component';

import {RouterModule} from '@angular/router';
import {VendorModule} from '@shared/modules/vendor.module';

@NgModule({
    declarations: [
        BaseComponent,
        FooterComponent,
        NavbarComponent,
    ],
    imports: [
        RouterModule,
        VendorModule
    ],
    exports: [
        BaseComponent,
        FooterComponent,
        NavbarComponent,
    ]
})
export class SharedModule { }
