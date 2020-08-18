import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthContainerComponent} from './containers/auth-container/auth-container.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AuthContainerComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRouting {}
