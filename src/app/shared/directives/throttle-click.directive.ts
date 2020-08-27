import {throttleTime} from 'rxjs/operators';
import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Directive({
    selector: '[throttleClick]'
})
export class ThrottleClickDirective implements OnDestroy {
    @Input() throttleTime = 500;
    @Output() throttleClick = new EventEmitter();
    private clicks = new Subject();
    private subscription: Subscription;

    constructor() {
        this.subscription = this.clicks.pipe(throttleTime(this.throttleTime))
            .subscribe(e => this.throttleClick.emit(e));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    clickEvent(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
