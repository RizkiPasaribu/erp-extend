import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData, AuthResponse, ProfileMe } from './auth-core.type';
import { AUTH_CRED } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthCoreService {
  constructor(private http: HttpClient) {}

  public async authenticate(payload: AuthData): Promise<void> {
    try {
      const ad = await lastValueFrom(
        this.http.post<AuthResponse>(`/oauth`, {
          username: payload.username,
          password: payload.password,
          grant_type: 'password',
          client_secret: AUTH_CRED.clientSecret,
          client_id: AUTH_CRED.clientId,
        })
      );
      this.setAuthSession(ad);
      await this.fetchAuthenticatedUser();
    } catch {
      throw 'Wrong Staff ID And Passwords';
    }
  }

  private setAuthSession(d: AuthResponse | null): void {
    localStorage.setItem('access_token', String(d?.access_token));
    localStorage.setItem('refresh_token', String(d?.refresh_token));
  }

  private async fetchAuthenticatedUser(): Promise<void> {
    await lastValueFrom(this.http.get<ProfileMe>(`/api/me`))
      .then((data) =>
        localStorage.setItem('account_data', JSON.stringify(data))
      )
      .catch((err) => console.log(err));
  }
}
