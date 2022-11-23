import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HrdService } from '../../hrd.service';
import { AttendanceResponse } from '../../hrd.type';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hrd-attendance',
  templateUrl: './hrd-attendance.component.html',
  styleUrls: ['./hrd-attendance.component.scss'],
})
export class HrdAttendanceComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  copyData: AttendanceResponse[] = [];
  dateData: Date = new Date();
  dataSource: MatTableDataSource<AttendanceResponse> =
    new MatTableDataSource<AttendanceResponse>();

  filterForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(this.dateData),
  });

  constructor(private hrdService: HrdService, private datePipe: DatePipe) {}
  // let copyData = [...this.dataSource.data];
  ngOnInit(): void {
    this.hrdService
      .getAttendance(this.dateConvert(this.filterForm.value.date!))
      .then((data) => {
        this.dataSource.data = data;
        this.copyData = data;
        this.dataSource.paginator = this.paginator;
      });
  }

  displayedColumns: string[] = [
    'Name',
    'Status',
    'Out Station',
    'Clock In',
    'Clock Out',
    'Total Minutes Late',
    'Total Hour',
    'Detail',
  ];

  searchByname() {
    this.dataSource.data = this.copyData.filter((data) => {
      return (
        data.firstName
          .toLowerCase()
          .indexOf(
            this.filterForm.value.name ? this.filterForm.value.name : ''
          ) > -1
      );
    });
  }

  submit() {
    this.hrdService.getAttendance(
      this.dateConvert(this.filterForm.value.date!)
    );
    this.dateData = this.filterForm.value.date!;
  }

  dateConvert(date: Date) {
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  clear() {
    this.filterForm.setValue({
      name: '',
      date: new Date(),
    });
    this.dateData = this.filterForm.value.date!;
    this.ngOnInit();
  }
}
