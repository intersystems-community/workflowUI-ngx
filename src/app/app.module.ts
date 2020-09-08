import {APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomInterceptor} from './custom-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {Injector, NgModule} from '@angular/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {CoalescingComponentFactoryResolver} from '@shared/services/coalescing-component-factory-resolver.service';
import {ServiceInjector} from '@core/service.injector';

import {SharedModule} from '@shared/modules/shared.module';
import {VendorModule} from '@shared/modules/vendor.module';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function initializeApp(appService: AppService) {
    return () => appService.loadConfig();
}

@NgModule({
    imports: [
        AppRouting,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        VendorModule
    ],
    providers: [
        {provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppService], multi: true },
        {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(injector: Injector, coalescingResolver: CoalescingComponentFactoryResolver) {
        ServiceInjector.injector = injector;
        coalescingResolver.init();
    }
}
