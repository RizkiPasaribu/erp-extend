import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AttendanceResponse } from './hrd.type';

@Injectable()
export class HrdService {
  constructor(private http: HttpClient) {}

  public async getAttendance(
    date: string | null = ''
  ): Promise<AttendanceResponse[]> {
    return await lastValueFrom(
      this.http.get<AttendanceResponse[]>(
        `/api/v1/attendance-report-today?date=${date}`
      )
    );
  }

  public async exportAttendancePdf(date: string | null = '') {
    // https://dev.xtend.my.id/api/v1/export-attendance-pdf?token=584527f8b5901f07cd153ee1ed25766a9cc3d8d8&date=2022-11-23
    lastValueFrom(
      this.http.get(
        `/api/v1/export-attendance-pdf?token=${localStorage.getItem(
          'access_token'
        )}&date=${date}`
      )
    );
  }
}
