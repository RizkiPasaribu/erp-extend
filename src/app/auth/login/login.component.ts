import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { AuthCoreService } from 'src/app/shared/services/auth-core/auth-core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading = false;
  constructor(
    private authService: AuthCoreService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {}

  login() {
    if (!this.loginForm.invalid) {
      this.isLoading = true;
      this.authService
        .authenticate(this.loginForm.value)
        .then((data) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
        })
        .catch((e) => {
          this.layoutService.showSnackBar({
            message: String(e.error.detail),
            color: 'bg-red-400',
            duration: 3000,
          });
        })
        .finally(() => (this.isLoading = false));
    }
  }
}
