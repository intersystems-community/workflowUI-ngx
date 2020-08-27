import {debounceTime} from 'rxjs/operators';
import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Directive({
    selector: '[debounceClick]'
})
export class DebounceClickDirective implements OnDestroy {
    @Input() debounceTime = 500;
    @Output() debounceClick = new EventEmitter();
    private clicks = new Subject();
    private subscription: Subscription;

    constructor() {
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime))
            .subscribe(e => this.debounceClick.emit(e));
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
