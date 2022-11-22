export interface AttendanceResponse {
  userProfileUuid: string;
  firstName: string;
  lastName: string;
  attendanceUuid: string | null;
  clockIn: string | null;
  clockOut: string | null;
  clockHour: number;
  breakIn: number | null;
  breakOut: number | null;
  breakHour: number;
  totalMinutesLate: number;
  isOutstation: boolean;
  leaveUuid: string | null;
  status: 'NO_STATUS' | 'INACTIVE';
}
