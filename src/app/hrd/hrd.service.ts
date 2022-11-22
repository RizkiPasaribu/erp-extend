import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AttendanceResponse } from './hrd.type';

@Injectable()
export class HrdService {
  constructor(private http: HttpClient) {}

  public async getAttendance(): Promise<AttendanceResponse[]> {
    return await lastValueFrom(
      this.http.get<AttendanceResponse[]>('/api/v1/attendance-report-today')
    );
  }
}