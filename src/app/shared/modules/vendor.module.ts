import {BlockUIModule} from 'primeng/blockui';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {MarkdownModule} from 'ngx-markdown';
import {MessageService} from 'primeng/api';
import {NgModule} from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [
        BlockUIModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        DynamicDialogModule,
        InputTextModule,
        MarkdownModule.forRoot(),
        PanelModule,
        ProgressSpinnerModule,
        RippleModule,
        TableModule,
        ToastModule
    ],
    exports: [
        BlockUIModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        DynamicDialogModule,
        InputTextModule,
        MarkdownModule,
        PanelModule,
        ProgressSpinnerModule,
        RippleModule,
        TableModule,
        ToastModule
    ],
    providers: [
        MessageService
    ]
})
export class VendorModule { }
