import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarData } from './layout.type';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private _snackBar: MatSnackBar) {}

  showSnackBar(conf: SnackbarData) {
    this._snackBar.open(conf.message, '', {
      duration: conf.duration,
      panelClass: ['text-white', conf.color],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
