import get from 'lodash-es/get';
import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Task} from '@core/models/taks';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';
import {WorklistService} from '../../worklist.service';

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent extends ModalBaseComponent implements OnInit {
    formFields: {[key: string]: string} | null = null;
    get = get;
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
            .subscribe(task => {
                this.task = task;
                this.formFields = {...task.formFields};
            });
    }

    performAction(action: string): void {
        const task: Task = {...this.task} as Task;
        task.action = action;

        if (task.formFields && task.formFields.$$$Handler) {
            task.formFields.$$$Handler = JSON.stringify(task.formFields.$$$Handler);
        }

        this._worklistService.saveTask(task)
            .subscribe(() => {
                this.closeModal(action);
            });
    }

    closeModal(action = '') {
        this._ref.close(action);
    }
}

