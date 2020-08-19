import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Task} from '../../../../../core/models/taks';
import {WorklistService} from '../../worklist.service';

@Component({
    selector: 'app-worklist-container',
    templateUrl: './worklist-container.component.html',
    styleUrls: ['./worklist-container.component.scss']
})
export class WorklistContainerComponent implements OnInit {
    loading: boolean = true;
    tasks: Task[] = [];

    constructor(
        private _worklistService: WorklistService
    ) {}

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

    showTaskDetails(id: string): void {

    }
}
