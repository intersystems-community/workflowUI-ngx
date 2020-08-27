import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthContainerComponent} from './containers/auth-container/auth-container.component';
import {AuthRouting} from './auth.routing';
import {TranslateModule} from '@ngx-translate/core';
import {VendorModule} from '@shared/modules/vendor.module';

@NgModule({
    imports: [
        AuthRouting,
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        VendorModule
    ],
    declarations: [
        AuthContainerComponent
    ],
    exports: [
        AuthContainerComponent,
    ]
})
export class AuthModule {}
