import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { AuthCoreService } from 'src/app/shared/services/auth-core/auth-core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  isShowPassword = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthCoreService,
    private layoutService: LayoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('refresh_token'))
      this.router.navigate(['/hrd/attendance']);
  }

  submit() {
    if (!this.loginForm.invalid) {
      this.isLoading = true;
      this.authService
        .authenticate(this.loginForm.value)
        .then(() => {
          this.layoutService.showSnackBar({
            message: 'Successfully Login',
            color: 'bg-green-400',
            duration: 3000,
          });
          this.router.navigate(['/hrd/attendance']);
        })
        .catch((e) =>
          this.layoutService.showSnackBar({
            message: e,
            color: 'bg-red-400',
            duration: 5000,
          })
        )
        .finally(() => (this.isLoading = false));
    }
  }
}
