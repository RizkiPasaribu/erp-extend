export interface AuthResponse {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
  scope: null;
  refresh_token: string;
}

export interface AuthData {
  username?: string | null;
  password?: string | null;
}

export interface RefreshTokenAndRemember {
  remember: boolean;
  refreshToken: string | null;
}

export type ProfileMe = {
  firstName: string;
  lastName: string;
  username: string;
  uuid: string;
  email: string;
  photo?: string;
  role: string;
};
