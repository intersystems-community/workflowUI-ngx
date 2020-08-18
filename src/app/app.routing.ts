import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '@core/guards/auth.guard';
import {AuthModule} from '@core/modules/auth/auth.module';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => AuthModule,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'worklist',
        loadChildren: () => import('app/feature/modules/worklist/worklist.module').then(m => m.WorklistModule),
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/worklist', pathMatch: 'full'},
    { path: '**', redirectTo: '/worklist' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRouting {
}
