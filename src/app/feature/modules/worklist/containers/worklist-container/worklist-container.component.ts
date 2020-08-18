import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {WorklistService} from '../../worklist.service';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-worklist-container',
    templateUrl: './worklist-container.component.html',
    styleUrls: ['./worklist-container.component.scss']
})
export class WorklistContainerComponent implements OnInit {
    loading: boolean = true;
    tasks: any[] = [];

    constructor(
        private _worklistService: WorklistService
    ) {}

    ngOnInit() {
        this.loadTasks();
    }

    loadTasks() {
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
}
