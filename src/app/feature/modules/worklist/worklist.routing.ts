import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorklistContainerComponent} from './containers/worklist-container/worklist-container.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: WorklistContainerComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorklistRouting {}
