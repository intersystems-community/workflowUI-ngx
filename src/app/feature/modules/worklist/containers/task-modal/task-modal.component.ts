import get from 'lodash-es/get';
import {BlockableUI, MessageService} from 'primeng/api';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ModalBaseComponent} from '@shared/components/modal-base/modal-base.component';
import {Task} from '@core/models/taks';
import {WorklistService} from '../../worklist.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent extends ModalBaseComponent implements OnInit, BlockableUI {
    formFields: {[key: string]: string} | null = null;
    loading: boolean = true;
    placeholder: string = 'assets/images/placeholder.jpg';
    task: Task | null = null;

    /** @ignore */
    constructor(
        protected _config: DynamicDialogConfig,
        private _el: ElementRef,
        private _i18n: TranslateService,
        private _messageService: MessageService,
        protected _ref: DynamicDialogRef,
        private _worklistService: WorklistService
    ) {
        super(_config, _ref);
    }

    ngOnInit(): void {
        this.loading = true;
        const id = this._config.data.id;

        this._worklistService.getTask(id)
            .subscribe(task => {
                this.task = task;
                this.formFields = {...task.formFields};
                this.loading = false;
            },
            (err) => {
                const detail = get(err, 'error.summary', '');
                this._messageService.add({severity: 'error', summary: this._i18n.instant('TASK_MODAL.LOADING_ERROR'), detail});
                console.error(err);
                this.closeModal();
                this.loading = false;
            });
    }

    getBlockableElement(): HTMLElement {
        return this._el.nativeElement.parentElement.parentElement;
    }

    performAction(action: string): void {
        this.loading = true;
        const task: Task = {...this.task} as Task;
        task.action = action;

        if (task.formFields && task.formFields.$$$Handler) {
            task.formFields.$$$Handler = JSON.stringify(task.formFields.$$$Handler);
        }

        this._worklistService.saveTask(task)
            .subscribe(() => {
                setTimeout(() => {
                    if (action !== '$Save') {
                        this._messageService.add({
                            severity: 'success',
                            summary: this._i18n.instant('TASK_MODAL.SUCCESS_MESSAGE'),
                            detail: this._i18n.instant('TASK_MODAL.ACTION_COMPLETE', {action})
                        });
                    } else {
                        this._messageService.add({severity: 'success', summary: this._i18n.instant('TASK_MODAL.SAVING_COMPLETE')});
                    }

                    this.closeModal(action);
                    this.loading = false;
                }, 300);
            },
            (err) => {
                const detail = get(err, 'error.summary', '');
                this._messageService.add({severity: 'error', summary: this._i18n.instant('TASK_MODAL.SAVING_ERROR'), detail});
                console.error(err);
                this.loading = false;
            });
    }

    closeModal(action = '') {
        this._ref.close(action);
    }
}

