import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eror404Component } from './eror404/eror404.component';
import { AuthCoreGuard } from './shared/services/auth-core/auth-core.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'hrd',
    loadChildren: () => import('./hrd/hrd.module').then((m) => m.HrdModule),
    canLoad: [AuthCoreGuard],
  },
  {
    path: '**',
    component: Eror404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
