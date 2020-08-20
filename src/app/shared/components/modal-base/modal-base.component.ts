import {AuthService} from '@core/modules/auth/auth.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder} from '@angular/forms';
import {ServiceInjector} from '@core/service.injector';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-modal-base',
    template: 'no template'
})
export class ModalBaseComponent extends BaseComponent {
    protected _authService: AuthService;
    protected _fb: FormBuilder;

    /** @ignore */
    constructor(
        protected _config: DynamicDialogConfig,
        protected _ref: DynamicDialogRef
    ) {
        super();

        this._authService = ServiceInjector.injector.get(AuthService);
        this._fb = ServiceInjector.injector.get(FormBuilder);

        this._authService.isLoggedIn$$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(isLoggedIn => {
                if (!isLoggedIn) {
                    this._ref.close();
                }
            });
    }
}
