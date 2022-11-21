import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './pages/dashboard-index/dashboard-index.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardIndexComponent,
  },
];

@NgModule({
  declarations: [DashboardIndexComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
