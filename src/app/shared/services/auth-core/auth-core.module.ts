import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCoreInterceptor } from './auth-core.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthCoreInterceptor,
      multi: true,
    },
  ],
})
export class AuthCoreModule {}
