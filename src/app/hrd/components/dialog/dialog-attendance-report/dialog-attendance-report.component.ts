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

  constructor(
    private hrdService: HrdService,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<DialogAttendanceReportComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  exportDaily(isExcel: boolean) {
    if (isExcel) {
      console.log('excel');
    } else {
      this.hrdService.exportAttendancePdf(
        this.datePipe.transform(this.dateDaily.value, 'yyyy-MM-dd')
      );
    }
  }

  exportMonthly(isExcel: boolean) {
    if (isExcel) {
      console.log('excel');
    } else {
      console.log('pdf');
    }
  }
}
