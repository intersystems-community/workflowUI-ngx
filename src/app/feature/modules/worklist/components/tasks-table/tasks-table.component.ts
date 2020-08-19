import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableColumn} from '../../../../../core/models/table';
import {Task} from '../../../../../core/models/taks';

@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.scss'],
})
export class TasksTableComponent {
    @Input() items: Task[] = [];
    @Input() loading: boolean = false;

    @Output() accept: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() details: EventEmitter<string> = new EventEmitter<string>();
    @Output() refresh: EventEmitter<null> = new EventEmitter<null>();
    @Output() relinquish: EventEmitter<Task> = new EventEmitter<Task>();

    cols: TableColumn[] = [
        {field: 'isNew', header: '', width: '60px', align: 'center', isSortable: true},
        {field: 'priority', header: 'Priority', width: '100px', align: 'right', isSortable: true},
        {field: 'subject', header: 'Subject', isSortable: true},
        {field: 'message', header: 'Message', isSortable: true},
        {field: 'role', header: 'Role', isSortable: true},
        {field: 'timeCreated', header: 'Time Created', width: '160px', align: 'center', isSortable: true}
    ];

    filterCols: string[] = ['priority', 'subject', 'message', 'role', 'timeCreated'];

    /** @ignore */
    constructor() {}

    onAccept(task: Task): void {
        this.accept.emit(task);
    }

    onRelinquish(task: Task): void {
        this.relinquish.emit(task);
    }

    onDetails(id: string): void {
        this.details.emit(id);
    }

    onRefresh(): void {
        this.refresh.emit();
    }
}

