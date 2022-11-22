import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HrdService } from '../../hrd.service';
import { AttendanceResponse } from '../../hrd.type';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hrd-attendance',
  templateUrl: './hrd-attendance.component.html',
  styleUrls: ['./hrd-attendance.component.scss'],
})
export class HrdAttendanceComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  dataSource: MatTableDataSource<AttendanceResponse> =
    new MatTableDataSource<AttendanceResponse>();

  constructor(private hrdService: HrdService) {}
  ngOnInit(): void {
    this.hrdService.getAttendance().then((data) => {
      this.dataSource = new MatTableDataSource<AttendanceResponse>(data);
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
}
