import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './auth-core.type';
import { AUTH_CRED } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthCoreService {
  constructor(private http: HttpClient) {}

  public async authenticate(payload: {
    username?: string | null;
    password?: string | null;
  }): Promise<AuthResponse> {
    return await lastValueFrom(
      this.http.post<AuthResponse>(`/oauth`, {
        username: payload.username,
        password: payload.password,
        grant_type: 'password',
        client_secret: AUTH_CRED.clientSecret,
        client_id: AUTH_CRED.clientId,
      })
    );
  }
}
