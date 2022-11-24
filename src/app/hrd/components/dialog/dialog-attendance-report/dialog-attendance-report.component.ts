import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HrdService } from 'src/app/hrd/hrd.service';

@Component({
  selector: 'app-dialog-attendance-report',
  templateUrl: './dialog-attendance-report.component.html',
  styleUrls: ['./dialog-attendance-report.component.scss'],
})
export class DialogAttendanceReportComponent implements OnInit {
  dateDaily = new FormControl(new Date());
  dateMonthYear: string = '';

  constructor(
    // private hrdService: HrdService,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<DialogAttendanceReportComponent>
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  downloadDaily(isExcel: boolean) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (isExcel) {
      link.setAttribute(
        'href',
        `/api/v1/export-attendance-today?token=${localStorage.getItem(
          'access_token'
        )}&date=${this.datePipe.transform(this.dateDaily.value, 'yyyy-MM-dd')}`
      );
    } else {
      link.setAttribute(
        'href',
        `/api/v1/export-attendance-pdf?token=${localStorage.getItem(
          'access_token'
        )}&date=${this.datePipe.transform(this.dateDaily.value, 'yyyy-MM-dd')}`
      );
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.closeDialog();
  }

  downloadMonthly(isExcel: boolean) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (isExcel) {
      link.setAttribute(
        'href',
        `/api/v1/export-attendance-monthly-excel?token=${localStorage.getItem(
          'access_token'
        )}&monthyear=${this.dateMonthYear}`
      );
    } else {
      link.setAttribute(
        'href',
        `/api/v1/export-attendance-monthly-pdf?token=${localStorage.getItem(
          'access_token'
        )}&monthyear=${this.dateMonthYear}`
      );
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.closeDialog();
  }
  setYearMonthDate(tes: string) {
    this.dateMonthYear = tes;
  }
}
