import {BrowserModule} from '@angular/platform-browser';
import {CustomInterceptor} from './custom-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';

import {SharedModule} from '@shared/modules/shared.module';
import {VendorModule} from '@shared/modules/vendor.module';

// Directives
import {ClickOutsideDirective} from '@core/directives/click-outside.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        AppRouting,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        VendorModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ],
    declarations: [
        AppComponent,
        // directives
        ClickOutsideDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
