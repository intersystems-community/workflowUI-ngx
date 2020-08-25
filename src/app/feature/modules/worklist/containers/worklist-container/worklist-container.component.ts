import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {Task} from '../../../../../core/models/taks';
import {WorklistService} from '../../worklist.service';
import {TaskModalComponent} from '../task-modal/task-modal.component';

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
            data: {id: task.id},
            header: task.subject || 'Workflow task',
            dismissableMask: false,
            modal: true,
            width: '70%'
        });

        ref.onClose.subscribe(action => action ? this.loadTasks() : null);
    }
}
