import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {TaskModalComponent} from './containers/task-modal/task-modal.component';
import {TasksTableComponent} from './components/tasks-table/tasks-table.component';
import {VendorModule} from '@shared/modules/vendor.module';
import {WorklistContainerComponent} from './containers/worklist-container/worklist-container.component';
import {WorklistRouting} from './worklist.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
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
