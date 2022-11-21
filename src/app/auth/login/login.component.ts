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
        .then(() => {
          this.layoutService.showSnackBar({
            message: 'Successfully Login',
            color: 'bg-green-400',
            duration: 3000,
          });
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
