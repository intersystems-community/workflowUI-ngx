import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TableColumn} from '../../../../../core/models/table';
import {Task} from '../../../../../core/models/taks';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksTableComponent {
    @Input() items: Task[] = [];
    @Input() loading: boolean = false;

    @Output() accept: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() details: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() refresh: EventEmitter<null> = new EventEmitter<null>();
    @Output() relinquish: EventEmitter<Task> = new EventEmitter<Task>();

    cols: TableColumn[] = [
        {field: 'isNew', header: '', width: '60px', align: 'center', isSortable: true},
        // tslint:disable-next-line:max-line-length
        {field: 'priority', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.PRIORITY'), width: '130px', align: 'right', isSortable: true},
        {field: 'subject', header:  this._i18n.instant('WORKLIST.TABLE_HEADERS.SUBJECT'), isSortable: true},
        {field: 'message', header:  this._i18n.instant('WORKLIST.TABLE_HEADERS.MESSAGE'), isSortable: true},
        {field: 'role', header:  this._i18n.instant('WORKLIST.TABLE_HEADERS.ROLE'), isSortable: true},
        // tslint:disable-next-line:max-line-length
        {field: 'timeCreated', header:  this._i18n.instant('WORKLIST.TABLE_HEADERS.TIME_CREATED'), width: '160px', align: 'center', isSortable: true}
    ];

    filterCols: string[] = ['priority', 'subject', 'message', 'role', 'timeCreated'];

    /** @ignore */
    constructor(
        private _i18n: TranslateService
    ) {}

    onAccept(task: Task): void {
        this.accept.emit(task);
    }

    onRelinquish(task: Task): void {
        this.relinquish.emit(task);
    }

    onDetails(task: Task): void {
        this.details.emit(task);
    }

    onRefresh(): void {
        this.refresh.emit();
    }
}

