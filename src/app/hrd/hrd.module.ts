import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HrdAttendanceComponent } from './pages/hrd-attendance/hrd-attendance.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { HrdService } from './hrd.service';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'attendance',
        component: HrdAttendanceComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [HrdAttendanceComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    RouterModule.forChild(routes),
  ],
  providers: [HrdService, DatePipe],
})
export class HrdModule {}
