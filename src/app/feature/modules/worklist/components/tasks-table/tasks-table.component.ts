import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableColumn} from '../../../../../core/models/table';

@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.scss'],
})
export class TasksTableComponent {
    @Input() items: any[] = [];
    @Input() loading: boolean = false;

    @Output() refresh: EventEmitter<null> = new EventEmitter<null>();

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

    onRefresh() {
        this.refresh.emit();
    }
}

