import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Task} from '@core/models/taks';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';
import {WorklistService} from '../../worklist.service';

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent extends ModalBaseComponent implements OnInit {
    task: Task | null = null;

    /** @ignore */
    constructor(
        protected _config: DynamicDialogConfig,
        protected _ref: DynamicDialogRef,
        private _worklistService: WorklistService
    ) {
        super(_config, _ref);
    }

    ngOnInit(): void {
        const id = this._config.data.id;

        this._worklistService.getTask(id)
            .subscribe(task => this.task = task);
    }
}

