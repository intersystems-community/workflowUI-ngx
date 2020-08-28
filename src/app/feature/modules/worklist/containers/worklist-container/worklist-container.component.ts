import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {TaskModalComponent} from '../task-modal/task-modal.component';
import {Task} from '../../../../../core/models/taks';
import {TranslateService} from '@ngx-translate/core';
import {WorklistService} from '../../worklist.service';

@Component({
    selector: 'app-worklist-container',
    templateUrl: './worklist-container.component.html',
    styleUrls: ['./worklist-container.component.scss'],
    providers: [DialogService]
})
export class WorklistContainerComponent implements OnInit {
    loading: boolean = true;
    tasks: Task[] = [];

    constructor(
        private _dialogService: DialogService,
        private _i18n: TranslateService,
        private _worklistService: WorklistService
    ) {
    }

    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks(): void {
        this.loading = true;
        this._worklistService.getTasks()
            .subscribe((tasks) => {
                    this.tasks = tasks;
                    this.loading = false;
                },
                () => {
                    this.tasks = [];
                    this.loading = false;
                });
    }

    acceptTask(task: Task): void {
        task = {...task, action: '$Accept', formFields: {}};
        this._worklistService.saveTask(task).subscribe(() => this.loadTasks());
    }

    relinquishTask(task: Task): void {
        task = {...task, action: '$Relinquish', formFields: {}};
        this._worklistService.saveTask(task).subscribe(() => this.loadTasks());
    }

    showTaskDetails(task: Task): void {
        const ref = this._dialogService.open(TaskModalComponent, {
            contentStyle: {overflow: 'hidden'},
            data: {id: task.id},
            header: task.subject || this._i18n.instant('TASK_MODAL.TITLE'),
            dismissableMask: false,
            transitionOptions: '350ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            modal: true,
            style: {'max-width': '1200px'},
            styleClass: 'details-modal'
        });

        ref.onClose.subscribe(action => action ? this.loadTasks() : null);
    }
}
