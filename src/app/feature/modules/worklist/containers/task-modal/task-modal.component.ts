import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Task} from '@core/models/taks';
import {WorklistService} from '../../worklist.service';

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
    task: Task | null = null;

    /** @ignore */
    constructor(
        private _config: DynamicDialogConfig,
        private _ref: DynamicDialogRef,
        private _worklistService: WorklistService
    ) {}

    ngOnInit(): void {
        const id = this._config.data.id;

        this._worklistService.getTask(id)
            .subscribe(task => this.task = task);
    }
}

