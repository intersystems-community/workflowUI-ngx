import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {NgModule} from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';

@NgModule({
    imports: [
        ButtonModule,
        CardModule,
        DynamicDialogModule,
        InputTextModule,
        PanelModule,
        RippleModule,
        TableModule
    ],
    exports: [
        ButtonModule,
        CardModule,
        DynamicDialogModule,
        InputTextModule,
        PanelModule,
        RippleModule,
        TableModule
    ]
})
export class VendorModule { }
