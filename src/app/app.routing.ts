import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '@core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'worklist',
        loadChildren: () => import('app/feature/modules/worklist/worklist.module').then(m => m.WorklistModule),
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/worklist', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRouting {
}
