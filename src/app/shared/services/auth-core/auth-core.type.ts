export interface AuthResponse {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
  scope: null;
  refresh_token: string;
}

export interface AuthData {
  username: string;
  password: string;
  remember: boolean;
}

export interface RefreshTokenAndRemember {
  remember: boolean;
  refreshToken: string | null;
}

export interface AuthData {
  username: string;
  password: string;
  remember: boolean;
}
