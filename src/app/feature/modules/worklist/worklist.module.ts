import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../../shared/modules/shared.module';
import {TaskModalComponent} from './containers/task-modal/task-modal.component';
import {TasksTableComponent} from './components/tasks-table/tasks-table.component';
import {TranslateModule} from '@ngx-translate/core';
import {VendorModule} from '@shared/modules/vendor.module';
import {WorklistContainerComponent} from './containers/worklist-container/worklist-container.component';
import {WorklistRouting} from './worklist.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
        VendorModule,
        WorklistRouting
    ],
    declarations: [
        TaskModalComponent,
        TasksTableComponent,
        WorklistContainerComponent
    ],
    exports: [
        WorklistContainerComponent
    ]
})
export class WorklistModule {}
