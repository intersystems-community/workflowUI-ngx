import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {NgModule} from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';

@NgModule({
    imports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        PanelModule,
        RippleModule,
        TableModule
    ],
    exports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        PanelModule,
        RippleModule,
        TableModule
    ]
})
export class VendorModule { }
