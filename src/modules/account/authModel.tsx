export interface UserAccount {
  userId: string;
  userPswd: string;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string;
  expires_in: number;
  exp: string;
  scope: string | string[];
  jti: string;
  userId: string;
  cstmrSno: number;
  auth: string;
  encodedInfo: string | null;
}
