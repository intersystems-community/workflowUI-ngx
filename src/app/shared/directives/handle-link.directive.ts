import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[handleLink]'
})
export class HandleLinkDirective implements OnChanges {
    @HostBinding('attr.rel') relAttr = '';
    @HostBinding('attr.target') targetAttr = '';
    @HostBinding('attr.href') hrefAttr = '';
    @Input() href: string = '';

    ngOnChanges() {
        this.hrefAttr = this.href;

        if (this.isLinkAbsolute()) {
            this.relAttr = 'noopener noreferrer';
            this.targetAttr = '_blank';
        }
    }

    private isLinkAbsolute() {
        return this.href.includes('://');
    }
}
